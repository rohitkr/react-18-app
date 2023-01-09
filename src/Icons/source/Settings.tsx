
import React from 'react';

export const Settings: React.FunctionComponent<any> = ({
  size="20px",
  color="currentColor",
  ...props
}) => {
  return (
    <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
  <path d="M11.2267 4L12.792 4.00092C12.8513 4.00374 12.9206 4.01157 12.996 4.02798L13.1691 4.07097C13.5713 4.18771 13.7606 4.3983 14.1292 5.25077L14.2871 5.62729L14.451 6.03345L14.8342 5.86293C15.5976 5.5299 15.9434 5.42718 16.2162 5.42718C16.4976 5.42718 16.7823 5.52607 17.0015 5.69975L17.1053 5.79271L18.162 6.84498L18.3131 7.00911C18.5965 7.34082 18.6592 7.6034 18.4605 8.23104L18.3501 8.54822L18.2017 8.92673L17.9559 9.51329L18.5451 9.73561C19.4648 10.0943 19.7359 10.2804 19.8846 10.6525L19.9112 10.7246L19.9589 10.8838C19.983 10.9741 19.9932 11.0382 19.9974 11.1096L20 11.2265V12.7103C20 12.8339 19.9957 12.9055 19.9638 13.0333C19.8364 13.5449 19.6948 13.7264 18.7372 14.1393L18.5479 14.2196L17.9705 14.4545L18.1501 14.8493C18.699 16.0756 18.7553 16.4343 18.4201 16.8678L18.3669 16.9335L18.2432 17.0712L17.1562 18.1575C16.9192 18.3971 16.5856 18.5274 16.2606 18.5274C16.0898 18.5274 15.8749 18.4815 15.5706 18.3792L15.4107 18.3234L15.0414 18.1822L14.4851 17.9527L14.3291 18.3681C13.9164 19.4488 13.7331 19.738 13.3315 19.8915L13.2583 19.9173L13.1043 19.9615C13.0169 19.9841 12.955 19.9937 12.8862 19.9975L12.7735 20L11.208 19.9991C11.1489 19.9963 11.0799 19.9885 11.0047 19.9722C10.5423 19.872 10.3405 19.7504 10.0159 19.071L9.94428 18.9167L9.78648 18.5521L9.548 17.9666L9.16457 18.1371C8.40086 18.47 8.05525 18.5726 7.78293 18.5726C7.50495 18.5726 7.22404 18.4758 6.99889 18.3004L6.89124 18.2062L5.80292 17.1181C5.39492 16.6856 5.29446 16.454 5.58402 15.6276L5.64716 15.4541L5.79474 15.0796L6.04309 14.488L5.63394 14.3344C4.56805 13.9272 4.27115 13.7406 4.11385 13.3438L4.08741 13.2715L4.04015 13.1117C4.01662 13.0224 4.00662 12.959 4.00257 12.8884L4 12.7728V11.2881C4 11.1635 4.00443 11.0912 4.03688 10.9623C4.14872 10.5181 4.27014 10.3237 4.93112 10.0095L5.09347 9.93468L5.45277 9.7802L6.02991 9.54625L5.85081 9.15004C5.24863 7.79456 5.24293 7.47232 5.72774 6.95938L5.79688 6.88814L6.84611 5.84129C7.08115 5.60495 7.41329 5.47332 7.73894 5.47332C7.93873 5.47332 8.19675 5.53525 8.59065 5.67775L8.768 5.7438L9.12861 5.88661L9.51564 6.04737L9.74446 5.4443C10.1137 4.50387 10.3063 4.2324 10.6991 4.09454L10.7752 4.07013L10.9351 4.02947C11.0123 4.01219 11.0668 4.00485 11.1274 4.00188L12.792 4.00092L11.2267 4ZM12.2654 6H11.6848L11.596 6.21539L11.4902 6.4849L11.1962 7.26965C11.1126 7.49033 10.9542 7.67311 10.7506 7.78744L10.6452 7.83875L10.0081 8.10386C9.80128 8.18992 9.57287 8.20358 9.35928 8.14497L9.23321 8.10113L8.57075 7.82099L8.24104 7.68718L7.94281 7.57228L7.5309 7.98326L7.73485 8.45907L8.0825 9.22097C8.17926 9.43127 8.19949 9.66722 8.14237 9.88868L8.09881 10.0195L7.8383 10.6526C7.74962 10.868 7.58902 11.0446 7.38569 11.1535L7.28061 11.2022L6.48631 11.5209L6.215 11.6347L6 11.7291V12.3211L6.1007 12.3632L6.48192 12.5142L7.25883 12.8036C7.48612 12.8856 7.67472 13.0465 7.79169 13.2548L7.84406 13.3628L8.1046 13.994C8.19063 14.2024 8.20322 14.4324 8.14273 14.647L8.09767 14.7735L7.76187 15.5636L7.56652 16.054L7.97824 16.4652L8.23658 16.358L8.73453 16.1392L9.20477 15.9233C9.42382 15.8187 9.6721 15.7978 9.90343 15.8621L10.0175 15.9013L10.6583 16.1659C10.8767 16.256 11.0549 16.42 11.1631 16.6273L11.2113 16.7344L11.5246 17.5138L11.7339 18H12.3168L12.405 17.7852L12.5103 17.5164L12.8036 16.732C12.8871 16.5094 13.0467 16.325 13.2521 16.2103L13.3585 16.1588L13.9966 15.8955C14.201 15.8112 14.4263 15.7974 14.6375 15.8541L14.7623 15.8967L15.2451 16.1021L15.7597 16.3135L16.0574 16.4284L16.47 16.0166L16.4286 15.9165L16.1971 15.3887L15.917 14.7794C15.8199 14.5687 15.7996 14.3323 15.857 14.1104L15.9007 13.9793L16.1608 13.349C16.249 13.1352 16.4081 12.9597 16.6095 12.8508L16.7136 12.802L17.5124 12.4801L18 12.2705V11.6793L17.8992 11.6374L17.5173 11.4868L16.7378 11.1972C16.511 11.1147 16.323 10.9536 16.2066 10.7452L16.1546 10.6372L15.8945 10.0034C15.8092 9.79556 15.7968 9.56631 15.8571 9.35247L15.902 9.22631L16.2372 8.43685L16.4323 7.94503L16.0203 7.53474L15.8981 7.58478L15.4412 7.78197L14.7801 8.08244C14.5701 8.17864 14.3348 8.19865 14.1138 8.14168L13.9833 8.09825L13.3429 7.835C13.1273 7.7464 12.9507 7.58585 12.8417 7.38255L12.793 7.27747L12.5393 6.64409L12.3603 6.21528L12.2654 6ZM12.0003 10C13.1028 10 14 10.8968 14 11.9994C14 13.102 13.1029 14 12.0003 14C10.8973 14 10 13.1022 10 11.9994C10 10.8966 10.8973 10 12.0003 10Z" />
</svg>
  )
};