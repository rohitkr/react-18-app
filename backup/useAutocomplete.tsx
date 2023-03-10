/* eslint-disable no-constant-condition */
import * as React from 'react';
import PropTypes from 'prop-types';
import {
  setRef,
  useEventCallback,
  useControlled,
  // unstable_useId as useId,
} from '@material-ui/core/utils';

// https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
// Give up on IE 11 support for this feature
function stripDiacritics(string: string) {
  return typeof string.normalize !== 'undefined'
    ? string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    : string;
}

export function createFilterOptions(config: any = {}) {
  const {
    ignoreAccents = true,
    ignoreCase = true,
    limit,
    matchFrom = 'any',
    startAfter = 0,
    stringify,
    trim = false,
  } = config;

  return (options: any[], { inputValue, getOptionLabel }: any) => {
    let input = trim ? inputValue.trim() : inputValue;
    if (ignoreCase) {
      input = input.toLowerCase();
    }
    if (ignoreAccents) {
      input = stripDiacritics(input);
    }

    if (startAfter > 0 && input.length <= startAfter) {
      return [];
    }

    const filteredOptions = options.filter((option: any) => {
      let candidate = (stringify || getOptionLabel)(option);
      if (ignoreCase) {
        candidate = candidate.toLowerCase();
      }
      if (ignoreAccents) {
        candidate = stripDiacritics(candidate);
      }

      return matchFrom === 'start' ? candidate.indexOf(input) === 0 : candidate.indexOf(input) > -1;
    });

    return typeof limit === 'number' ? filteredOptions.slice(0, limit) : filteredOptions;
  };
}

// To replace with .findIndex() once we stop IE 11 support.
function findIndex(array: string | any[], comp: { (val: any): any; (optionItem: any): any; (valueItem: any): any; (arg0: any): any; }) {
  for (let i = 0; i < array.length; i += 1) {
    if (comp(array[i])) {
      return i;
    }
  }

  return -1;
}

const defaultFilterOptions = createFilterOptions();

// Number of options to jump in list box when pageup and pagedown keys are used.
const pageSize = 5;

export default function useAutocomplete(props: { componentName?: any; multiple?: any; freeSolo?: any; autoComplete?: any; autoHighlight?: any; autoSelect?: any; blurOnSelect?: any; clearOnEscape?: any; debug?: any; defaultValue?: any; disableClearable?: any; disableCloseOnSelect?: any; disabledItemsFocusable?: any; disableListWrap?: any; filterOptions?: any; filterSelectedOptions?: any; getOptionDisabled?: any; getOptionLabel?: any; getOptionSelected?: any; groupBy?: any; id?: any; includeInputInList?: any; inputValue?: any; onChange?: any; onClose?: any; onInputChange?: any; onOpen?: any; open?: any; openOnFocus?: any; options?: any; selectOnFocus?: any; value?: any; }) {
  const {
    autoComplete = false,
    autoHighlight = false,
    autoSelect = false,
    blurOnSelect = false,
    clearOnEscape = false,
    componentName = 'useAutocomplete',
    debug = false,
    defaultValue = props.multiple ? [] : null,
    disableClearable = false,
    disableCloseOnSelect = false,
    disabledItemsFocusable = false,
    disableListWrap = false,
    filterOptions = defaultFilterOptions,
    filterSelectedOptions = false,
    freeSolo = false,
    getOptionDisabled,
    getOptionLabel = (x: any) => x,
    getOptionSelected = (option: any, value: any) => option === value,
    groupBy,
    id: idProp,
    includeInputInList = false,
    inputValue: inputValueProp,
    multiple = false,
    onChange,
    onClose,
    onInputChange,
    onOpen,
    open: openProp,
    openOnFocus = false,
    options,
    selectOnFocus = !props.freeSolo,
    value: valueProp,
  } = props;

  // const id = useId(idProp);
  const id = idProp;

  const ignoreFocus = React.useRef(false);
  const firstFocus = React.useRef(true);
  // const inputRef = React.useRef(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  // const listboxRef = React.useRef(null);
  const listboxRef = React.useRef<HTMLInputElement>(null);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement>();

  const [focusedTag, setFocusedTag] = React.useState(-1);
  const defaultHighlighted = autoHighlight ? 0 : -1;
  const highlightedIndexRef = React.useRef(defaultHighlighted);

  const setHighlightedIndex = useEventCallback((index: number, mouse = false) => {
    highlightedIndexRef.current = index;
    // does the index exist?
    if (index === -1) {
      inputRef.current?.removeAttribute('aria-activedescendant');
    } else {
      inputRef.current?.setAttribute('aria-activedescendant', `${id}-option-${index}`);
    }

    if (!listboxRef.current) {
      return;
    }

    const prev = listboxRef.current?.querySelector('[data-focus]');
    if (prev) {
      prev.removeAttribute('data-focus');
    }

    const listboxNode = listboxRef.current.parentElement?.querySelector('[role="listbox"]');

    // "No results"
    if (!listboxNode) {
      return;
    }

    if (index === -1) {
      listboxNode.scrollTop = 0;
      return;
    }

    const option = listboxRef.current.querySelector(`[data-option-index="${index}"]`);

    if (!option) {
      return;
    }

    option.setAttribute('data-focus', 'true');

    // Scroll active descendant into view.
    // Logic copied from https://www.w3.org/TR/wai-aria-practices/examples/listbox/js/listbox.js
    //
    // Consider this API instead once it has a better browser support:
    // .scrollIntoView({ scrollMode: 'if-needed', block: 'nearest' });
    if (listboxNode.scrollHeight > listboxNode.clientHeight && !mouse) {
      const element: any = option;

      const scrollBottom = listboxNode.clientHeight + listboxNode.scrollTop;
      const elementBottom = element.offsetTop + element.offsetHeight;
      if (elementBottom > scrollBottom) {
        listboxNode.scrollTop = elementBottom - listboxNode.clientHeight;
      } else if (
        element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0) <
        listboxNode.scrollTop
      ) {
        listboxNode.scrollTop = element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0);
      }
    }
  });

  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: componentName,
  });
  const [inputValue, setInputValue] = useControlled({
    controlled: inputValueProp,
    default: '',
    name: componentName,
    state: 'inputValue',
  });

  const [focused, setFocused] = React.useState(false);

  const resetInputValue = useEventCallback((event: any, newValue: null) => {
    let newInputValue;
    if (multiple) {
      newInputValue = '';
    } else if (newValue == null) {
      newInputValue = '';
    } else {
      const optionLabel = getOptionLabel(newValue);

      if (process.env.NODE_ENV !== 'production') {
        if (typeof optionLabel !== 'string') {
          const erroneousReturn =
            optionLabel === undefined ? 'undefined' : `${typeof optionLabel} (${optionLabel})`;
          console.error(
            `Material-UI: the \`getOptionLabel\` method of ${componentName} returned ${erroneousReturn} instead of a string for ${JSON.stringify(
              newValue,
            )}.`,
          );
        }
      }

      newInputValue = typeof optionLabel === 'string' ? optionLabel : '';
    }

    if (inputValue === newInputValue) {
      return;
    }

    setInputValue(newInputValue);

    if (onInputChange) {
      onInputChange(event, newInputValue, 'reset');
    }
  });

  React.useEffect(() => {
    // resetInputValue(null, value);
  }, [value, resetInputValue]);

  const { current: isOpenControlled } = React.useRef(openProp != null);
  const [openState, setOpenState] = React.useState(false);
  const open = isOpenControlled ? openProp : openState;

  const inputValueIsSelectedValue =
    !multiple && value != null && inputValue === getOptionLabel(value);

  let popupOpen = open;

  const filteredOptions = popupOpen
    ? filterOptions(
      options.filter((option: any) => {
        if (
          filterSelectedOptions &&
          (multiple ? value : [value]).some(
            (value2: null) => value2 !== null && getOptionSelected(option, value2),
          )
        ) {
          return false;
        }
        return true;
      }),
      // we use the empty string to manipulate `filterOptions` to not filter any options
      // i.e. the filter predicate always returns true
      { inputValue: inputValueIsSelectedValue ? '' : inputValue, getOptionLabel },
    )
    : [];

  popupOpen = freeSolo && filteredOptions.length === 0 ? false : popupOpen;

  if (process.env.NODE_ENV !== 'production') {
    if (value !== null && !freeSolo && options.length > 0) {
      const missingValue = (multiple ? value : [value]).filter(
        (value2: any) => !options.some((option: any) => getOptionSelected(option, value2)),
      );

      if (missingValue.length > 0) {
        console.warn(
          [
            `Material-UI: the value provided to ${componentName} is invalid.`,
            `None of the options match with \`${missingValue.length > 1
              ? JSON.stringify(missingValue)
              : JSON.stringify(missingValue[0])
            }\`.`,
            'You can use the `getOptionSelected` prop to customize the equality test.',
          ].join('\n'),
        );
      }
    }
  }

  const focusTag = useEventCallback((tagToFocus: number) => {
    if (tagToFocus === -1) {
      inputRef.current?.focus();
    } else {
      // anchorEl?.querySelector(`[data-tag-index="${tagToFocus}"]`).focus();
    }
  });

  // Ensure the focusedTag is never inconsistent
  React.useEffect(() => {
    if (multiple && focusedTag > value.length - 1) {
      setFocusedTag(-1);
      // focusTag(-1);
    }
  }, [value, multiple, focusedTag, focusTag]);

  function validOptionIndex(index: number, direction: string) {
    if (!listboxRef.current || index === -1) {
      return -1;
    }

    let nextFocus = index;

    while (true) {
      // Out of range
      if (
        (direction === 'next' && nextFocus === filteredOptions.length) ||
        (direction === 'previous' && nextFocus === -1)
      ) {
        return -1;
      }

      const option = listboxRef.current.querySelector(`[data-option-index="${nextFocus}"]`);

      // Same logic as MenuList.js
      const nextFocusDisabled = disabledItemsFocusable
        ? false
        : option && (option?.disabled || option.getAttribute('aria-disabled') === 'true');

      if ((option && !option.hasAttribute('tabindex')) || nextFocusDisabled) {
        // Move to the next element.
        nextFocus += direction === 'next' ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }

  const changeHighlightedIndex = useEventCallback((diff: string | number, direction: any) => {
    if (!popupOpen) {
      return;
    }

    const getNextIndex = () => {
      const maxIndex = filteredOptions.length - 1;

      if (diff === 'reset') {
        return defaultHighlighted;
      }

      if (diff === 'start') {
        return 0;
      }

      if (diff === 'end') {
        return maxIndex;
      }

      const numDiff = Number(diff);

      const newIndex = Number(`${highlightedIndexRef.current}` + diff);

      if (newIndex < 0) {
        if (newIndex === -1 && includeInputInList) {
          return -1;
        }

        if ((disableListWrap && highlightedIndexRef.current !== -1) || Math.abs(numDiff) > 1) {
          return 0;
        }

        return maxIndex;
      }

      if (newIndex > maxIndex) {
        if (newIndex === maxIndex + 1 && includeInputInList) {
          return -1;
        }

        if (disableListWrap || Math.abs(numDiff) > 1) {
          return maxIndex;
        }

        return 0;
      }

      return newIndex;
    };

    const nextIndex = validOptionIndex(getNextIndex(), direction);
    setHighlightedIndex(nextIndex);

    if (autoComplete && diff !== 'reset') {
      if (nextIndex === -1) {
        inputRef.current.value = inputValue;
      } else {
        const option = getOptionLabel(filteredOptions[nextIndex]);
        inputRef.current.value = option;

        // The portion of the selected suggestion that has not been typed by the user,
        // a completion string, appears inline after the input cursor in the textbox.
        const index = option.toLowerCase().indexOf(inputValue.toLowerCase());
        if (index === 0 && inputValue.length > 0) {
          inputRef.current.setSelectionRange(inputValue.length, option.length);
        }
      }
    }
  });

  React.useEffect(() => {
    if (!open) {
      return;
    }

    const valueItem = multiple ? value[0] : value;

    // The popup is empty
    if (filteredOptions.length === 0 || valueItem == null) {
      changeHighlightedIndex('reset', 'next');
      return;
    }

    // Synchronize the value with the highlighted index
    if (!filterSelectedOptions && valueItem != null) {
      const currentOption = filteredOptions[highlightedIndexRef.current];

      // Keep the current highlighted index if possible
      if (
        multiple &&
        currentOption &&
        findIndex(value, (val: any) => getOptionSelected(currentOption, val)) !== -1
      ) {
        return;
      }

      const itemIndex = findIndex(filteredOptions, (optionItem: any) =>
        getOptionSelected(optionItem, valueItem),
      );

      if (itemIndex === -1) {
        changeHighlightedIndex('reset', 'next');
      } else {
        setHighlightedIndex(itemIndex);
      }
      return;
    }

    // Keep the index in the boundaries
    if (highlightedIndexRef.current >= filteredOptions.length - 1) {
      setHighlightedIndex(filteredOptions.length - 1);
    }

    // Ignore filterOptions => options, getOptionSelected, getOptionLabel)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    value,
    open,
    filterSelectedOptions,
    changeHighlightedIndex,
    setHighlightedIndex,
    inputValue,
    multiple,
  ]);

  const handleOpen = (event: any) => {
    if (open) {
      return;
    }

    if (onOpen) {
      onOpen(event);
    }
    if (!isOpenControlled) {
      setOpenState(true);
    }
  };

  const handleClose = (event: any, reason: string) => {
    if (!open) {
      return;
    }

    if (onClose) {
      onClose(event, reason);
    }
    if (!isOpenControlled) {
      setOpenState(false);
    }
  };

  const handleValue = (event: any, newValue: any[] | null, reason: string, details: { option: any; } | undefined) => {
    if (value === newValue) {
      return;
    }

    if (onChange) {
      onChange(event, newValue, reason, details);
    }

    setValue(newValue);
  };

  const isTouch = React.useRef(false);

  const selectNewValue = (event: any, option: any, reasonProp = 'select-option', origin = 'options') => {
    let reason = reasonProp;
    let newValue = option;

    if (multiple) {
      newValue = Array.isArray(value) ? [...value] : [];

      if (process.env.NODE_ENV !== 'production') {
        const matches = newValue.filter((val: any) => getOptionSelected(option, val));

        if (matches.length > 1) {
          console.error(
            [
              `Material-UI: the \`getOptionSelected\` method of ${componentName} do not handle the arguments correctly.`,
              `The component expects a single value to match a given option but found ${matches.length} matches.`,
            ].join('\n'),
          );
        }
      }

      const itemIndex = findIndex(newValue, (valueItem: any) => getOptionSelected(option, valueItem));

      if (itemIndex === -1) {
        newValue.push(option);
      } else if (origin !== 'freeSolo') {
        newValue.splice(itemIndex, 1);
        reason = 'remove-option';
      }
    }

    resetInputValue(event, newValue);

    handleValue(event, newValue, reason, { option });
    if (!disableCloseOnSelect) {
      handleClose(event, reason);
    }

    if (
      blurOnSelect === true ||
      (blurOnSelect === 'touch' && isTouch.current) ||
      (blurOnSelect === 'mouse' && !isTouch.current)
    ) {
      inputRef.current.blur();
    }
  };

  function validTagIndex(index: number, direction: string) {
    if (index === -1) {
      return -1;
    }

    let nextFocus = index;

    while (true) {
      // Out of range
      if (
        (direction === 'next' && nextFocus === value.length) ||
        (direction === 'previous' && nextFocus === -1)
      ) {
        return -1;
      }

      const option = anchorEl.querySelector(`[data-tag-index="${nextFocus}"]`);

      // Same logic as MenuList.js
      if (
        option &&
        (!option.hasAttribute('tabindex') ||
          option.disabled ||
          option.getAttribute('aria-disabled') === 'true')
      ) {
        nextFocus += direction === 'next' ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }

  const handleFocusTag = (event: any, direction: string) => {
    if (!multiple) {
      return;
    }

    handleClose(event, 'toggleInput');

    let nextTag = focusedTag;

    if (focusedTag === -1) {
      if (inputValue === '' && direction === 'previous') {
        nextTag = value.length - 1;
      }
    } else {
      nextTag += direction === 'next' ? 1 : -1;

      if (nextTag < 0) {
        nextTag = 0;
      }

      if (nextTag === value.length) {
        nextTag = -1;
      }
    }

    nextTag = validTagIndex(nextTag, direction);

    setFocusedTag(nextTag);
    focusTag(nextTag);
  };

  const handleClear = (event: any) => {
    ignoreFocus.current = true;
    setInputValue('');

    if (onInputChange) {
      onInputChange(event, '', 'clear');
    }

    handleValue(event, multiple ? [] : null, 'clear');
  };

  const handleKeyDown = (other: { onKeyDown?: any; }) => (event: { key: string; preventDefault: () => void; which: number; stopPropagation: () => void; }) => {
    if (focusedTag !== -1 && ['ArrowLeft', 'ArrowRight'].indexOf(event.key) === -1) {
      setFocusedTag(-1);
      focusTag(-1);
    }

    switch (event.key) {
      case 'Home':
        if (popupOpen) {
          // Prevent scroll of the page
          event.preventDefault();
          changeHighlightedIndex('start', 'next');
        }
        break;
      case 'End':
        if (popupOpen) {
          // Prevent scroll of the page
          event.preventDefault();
          changeHighlightedIndex('end', 'previous');
        }
        break;
      case 'PageUp':
        // Prevent scroll of the page
        event.preventDefault();
        changeHighlightedIndex(-pageSize, 'previous');
        handleOpen(event);
        break;
      case 'PageDown':
        // Prevent scroll of the page
        event.preventDefault();
        changeHighlightedIndex(pageSize, 'next');
        handleOpen(event);
        break;
      case 'ArrowDown':
        // Prevent cursor move
        event.preventDefault();
        changeHighlightedIndex(1, 'next');
        handleOpen(event);
        break;
      case 'ArrowUp':
        // Prevent cursor move
        event.preventDefault();
        changeHighlightedIndex(-1, 'previous');
        handleOpen(event);
        break;
      case 'ArrowLeft':
        handleFocusTag(event, 'previous');
        break;
      case 'ArrowRight':
        handleFocusTag(event, 'next');
        break;
      case 'Enter':
        // Wait until IME is settled.
        if (event.which === 229) {
          break;
        }
        if (highlightedIndexRef.current !== -1 && popupOpen) {
          const option = filteredOptions[highlightedIndexRef.current];
          const disabled = getOptionDisabled ? getOptionDisabled(option) : false;

          if (disabled) {
            return;
          }

          // We don't want to validate the form.
          event.preventDefault();
          selectNewValue(event, option, 'select-option');

          // Move the selection to the end.
          if (autoComplete) {
            inputRef.current.setSelectionRange(
              inputRef.current.value.length,
              inputRef.current.value.length,
            );
          }
        } else if (freeSolo && inputValue !== '' && inputValueIsSelectedValue === false) {
          if (multiple) {
            // Allow people to add new values before they submit the form.
            event.preventDefault();
          }
          selectNewValue(event, inputValue, 'create-option', 'freeSolo');
        }
        break;
      case 'Escape':
        if (popupOpen) {
          // Avoid Opera to exit fullscreen mode.
          event.preventDefault();
          // Avoid the Modal to handle the event.
          event.stopPropagation();
          handleClose(event, 'escape');
        } else if (clearOnEscape && (inputValue !== '' || (multiple && value.length > 0))) {
          // Avoid Opera to exit fullscreen mode.
          event.preventDefault();
          // Avoid the Modal to handle the event.
          event.stopPropagation();
          handleClear(event);
        }
        break;
      case 'Backspace':
        if (multiple && inputValue === '' && value.length > 0) {
          const index = focusedTag === -1 ? value.length - 1 : focusedTag;
          const newValue = [...value];
          newValue.splice(index, 1);
          handleValue(event, newValue, 'remove-option', {
            option: value[index],
          });
        }
        break;
      default:
    }

    if (other.onKeyDown) {
      other.onKeyDown(event);
    }
  };

  const handleFocus = (event: any) => {
    setFocused(true);

    if (openOnFocus && !ignoreFocus.current) {
      handleOpen(event);
    }
  };

  const handleBlur = (event: any) => {
    // Ignore the event when using the scrollbar with IE 11
    if (
      listboxRef.current !== null &&
      document.activeElement === listboxRef.current.parentElement
    ) {
      inputRef.current.focus();
      return;
    }

    setFocused(false);
    firstFocus.current = true;
    ignoreFocus.current = false;

    if (debug && inputValue !== '') {
      return;
    }

    if (autoSelect && highlightedIndexRef.current !== -1 && popupOpen) {
      selectNewValue(event, filteredOptions[highlightedIndexRef.current], 'blur');
    } else if (autoSelect && freeSolo && inputValue !== '') {
      selectNewValue(event, inputValue, 'blur', 'freeSolo');
    } else {
      resetInputValue(event, value);
    }

    handleClose(event, 'blur');
  };

  const handleInputChange = (event: { target: { value: any; }; }) => {
    const newValue = event.target.value;

    if (inputValue !== newValue) {
      setInputValue(newValue);

      if (onInputChange) {
        onInputChange(event, newValue, 'input');
      }
    }

    if (newValue === '') {
      if (!disableClearable && !multiple) {
        handleValue(event, null, 'clear');
      }
    } else {
      handleOpen(event);
    }
  };

  const handleOptionMouseOver = (event: { currentTarget: { getAttribute: (arg0: string) => any; }; }) => {
    const index = Number(event.currentTarget.getAttribute('data-option-index'));
    setHighlightedIndex(index, 'mouse');
  };

  const handleOptionTouchStart = () => {
    isTouch.current = true;
  };

  const handleOptionClick = (event: { currentTarget: { getAttribute: (arg0: string) => any; }; }) => {
    const index = Number(event.currentTarget.getAttribute('data-option-index'));
    selectNewValue(event, filteredOptions[index], 'select-option');

    isTouch.current = false;
  };

  const handleTagDelete = (index: number) => (event: any) => {
    const newValue = [...value];
    newValue.splice(index, 1);
    handleValue(event, newValue, 'remove-option', {
      option: value[index],
    });
  };

  const handleListboxRef = useEventCallback((node: any) => {
    setRef(listboxRef, node);

    if (!node) {
      return;
    }

    // Automatically select the first option as the listbox become visible.
    if (highlightedIndexRef.current === -1 && autoHighlight) {
      changeHighlightedIndex('reset', 'next');
    } else {
      // Restore the focus to the correct option.
      setHighlightedIndex(highlightedIndexRef.current);
    }
  });

  const handlePopupIndicator = (event: any) => {
    if (open) {
      handleClose(event, 'toggleInput');
    } else {
      handleOpen(event);
    }
  };

  // Prevent input blur when interacting with the combobox
  const handleMouseDown = (event: { target: { getAttribute: (arg0: string) => any; }; preventDefault: () => void; }) => {
    if (event.target.getAttribute('id') !== id) {
      event.preventDefault();
    }
  };

  // Focus the input when interacting with the combobox
  const handleClick = () => {
    inputRef.current.focus();

    if (
      selectOnFocus &&
      firstFocus.current &&
      inputRef.current.selectionEnd - inputRef.current.selectionStart === 0
    ) {
      inputRef.current.select();
    }

    firstFocus.current = false;
  };

  const handleInputMouseDown = (event: any) => {
    if (inputValue === '') {
      handlePopupIndicator(event);
    }
  };

  let dirty = freeSolo && inputValue.length > 0;
  dirty = dirty || (multiple ? value.length > 0 : value !== null);

  let groupedOptions = filteredOptions;
  if (groupBy) {
    // used to keep track of key and indexes in the result array
    const indexBy = new Map();
    let warn = false;

    groupedOptions = filteredOptions.reduce((acc: { options: any[]; }[], option: any, index: any) => {
      const group = groupBy(option);

      if (acc.length > 0 && acc[acc.length - 1].group === group) {
        acc[acc.length - 1].options.push(option);
      } else {
        if (process.env.NODE_ENV !== 'production') {
          if (indexBy.get(group) && !warn) {
            console.warn(
              `Material-UI: the options provided combined with the \`groupBy\` method of ${componentName} returns duplicated headers.`,
              'You can solve the issue by sorting the options with the output of `groupBy`.',
            );
            warn = true;
          }
          indexBy.set(group, true);
        }

        acc.push({
          key: index,
          index,
          group,
          options: [option],
        });
      }

      return acc;
    }, []);
  }

  return {
    getRootProps: (other = {}) => ({
      'aria-owns': popupOpen ? `${id}-popup` : null,
      role: 'combobox',
      'aria-expanded': popupOpen,
      ...other,
      onKeyDown: handleKeyDown(other),
      onMouseDown: handleMouseDown,
      onClick: handleClick,
    }),
    getInputLabelProps: () => ({
      id: `${id}-label`,
      htmlFor: id,
    }),
    getInputProps: () => ({
      id,
      value: inputValue,
      onBlur: handleBlur,
      onFocus: handleFocus,
      onChange: handleInputChange,
      onMouseDown: handleInputMouseDown,
      // if open then this is handled imperativeley so don't let react override
      // only have an opinion about this when closed
      'aria-activedescendant': popupOpen ? '' : null,
      'aria-autocomplete': autoComplete ? 'both' : 'list',
      'aria-controls': popupOpen ? `${id}-popup` : null,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: 'off',
      ref: inputRef,
      autoCapitalize: 'none',
      spellCheck: 'false',
    }),
    getClearProps: () => ({
      tabIndex: -1,
      onClick: handleClear,
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      onClick: handlePopupIndicator,
    }),
    getTagProps: ({ index }) => ({
      key: index,
      'data-tag-index': index,
      tabIndex: -1,
      onDelete: handleTagDelete(index),
    }),
    getListboxProps: () => ({
      role: 'listbox',
      id: `${id}-popup`,
      'aria-labelledby': `${id}-label`,
      ref: handleListboxRef,
      onMouseDown: (event: { preventDefault: () => void; }) => {
        // Prevent blur
        event.preventDefault();
      },
    }),
    getOptionProps: ({ index, option }) => {
      const selected = (multiple ? value : [value]).some(
        (value2: null) => value2 != null && getOptionSelected(option, value2),
      );
      const disabled = getOptionDisabled ? getOptionDisabled(option) : false;

      return {
        key: index,
        tabIndex: -1,
        role: 'option',
        id: `${id}-option-${index}`,
        onMouseOver: handleOptionMouseOver,
        onClick: handleOptionClick,
        onTouchStart: handleOptionTouchStart,
        'data-option-index': index,
        'aria-disabled': disabled,
        'aria-selected': selected,
      };
    },
    id,
    inputValue,
    value,
    dirty,
    popupOpen,
    focused: focused || focusedTag !== -1,
    anchorEl,
    setAnchorEl,
    focusedTag,
    groupedOptions,
  };
}

useAutocomplete.propTypes = {
  /**
   * If `true`, the portion of the selected suggestion that has not been typed by the user,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   */
  autoComplete: PropTypes.bool,
  /**
   * If `true`, the first option is automatically highlighted.
   */
  autoHighlight: PropTypes.bool,
  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   */
  autoSelect: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   */
  clearOnEscape: PropTypes.bool,
  /**
   * The component name that is using this hook. Used for warnings.
   */
  componentName: PropTypes.string,
  /**
   * If `true`, the popup will ignore the blur event if the input is filled.
   * You can inspect the popup markup with your browser tools.
   * Consider this option when you need to customize the component.
   */
  debug: PropTypes.bool,
  /**
   * The default input value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.any,
  /**
   * If `true`, the input can't be cleared.
   */
  disableClearable: PropTypes.bool,
  /**
   * If `true`, the popup won't close when a value is selected.
   */
  disableCloseOnSelect: PropTypes.bool,
  /**
   * If `true`, will allow focus on disabled items.
   */
  disabledItemsFocusable: PropTypes.bool,
  /**
   * If `true`, the list box in the popup will not wrap focus.
   */
  disableListWrap: PropTypes.bool,
  /**
   * A filter function that determins the options that are eligible.
   *
   * @param {any} options The options to render.
   * @param {object} state The state of the component.
   * @returns {boolean}
   */
  filterOptions: PropTypes.func,
  /**
   * If `true`, hide the selected options from the list box.
   */
  filterSelectedOptions: PropTypes.bool,
  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   */
  freeSolo: PropTypes.bool,
  /**
   * Used to determine the disabled state for a given option.
   */
  getOptionDisabled: PropTypes.func,
  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   */
  getOptionLabel: PropTypes.func,
  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {any} options The option to group.
   * @returns {string}
   */
  groupBy: PropTypes.func,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: PropTypes.string,
  /**
   * If `true`, the highlight can move to the input.
   */
  includeInputInList: PropTypes.bool,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: PropTypes.bool,
  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback
   * @param {any} value
   * @param {string} reason One of "create-option", "select-option", "remove-option", "blur" or "clear".
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: PropTypes.func,
  /**
   * Callback fired when the text input value changes.
   *
   * @param {object} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason One of "input" (user input) or "reset" (programmatic change).
   */
  onInputChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: PropTypes.func,
  /**
   * Control the popup` open state.
   */
  open: PropTypes.bool,
  /**
   * If `true`, the popup will open on input focus.
   */
  openOnFocus: PropTypes.bool,
  /**
   * Array of options.
   */
  options: PropTypes.array,
  /**
   * The input value.
   */
  value: PropTypes.any,
};
