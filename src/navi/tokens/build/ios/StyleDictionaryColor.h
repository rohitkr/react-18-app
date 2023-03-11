
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Thu, 09 Mar 2023 10:49:30 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorNone,
ColorPrimitiveWhite,
ColorPrimitiveBlack,
ColorPrimary50,
ColorPrimary100,
ColorPrimary200,
ColorPrimary300,
ColorPrimary400,
ColorPrimary500,
ColorPrimary600,
ColorSecondary0,
ColorSecondary50,
ColorSecondary100,
ColorSecondary200,
ColorSecondary300,
ColorSecondary400,
ColorSecondary500,
ColorSecondary600,
ColorSecondary700,
ColorSecondary800,
ColorSecondary900,
ColorSecondary1000,
ColorSuccess50,
ColorSuccess100,
ColorSuccess200,
ColorSuccess300,
ColorSuccess400,
ColorSuccess500,
ColorSuccess600,
ColorSuccess700,
ColorInfo50,
ColorInfo100,
ColorInfo200,
ColorInfo300,
ColorInfo400,
ColorInfo500,
ColorInfo600,
ColorWarning50,
ColorWarning100,
ColorWarning200,
ColorWarning300,
ColorWarning400,
ColorWarning500,
ColorWarning600,
ColorWarning700,
ColorCritical50,
ColorCritical100,
ColorCritical200,
ColorCritical300,
ColorCritical400,
ColorCritical500,
ColorCritical600,
ColorCrimson100,
ColorCrimson200,
ColorCrimson300,
ColorCrimson400,
ColorCrimson500,
ColorCrimson600,
ColorCrimson700,
ColorBrightblue100,
ColorBrightblue200,
ColorBrightblue300,
ColorBrightblue400,
ColorBrightblue500,
ColorBrightblue600,
ColorBrightblue700,
ColorOrange100,
ColorOrange200,
ColorOrange300,
ColorOrange400,
ColorOrange500,
ColorOrange600,
ColorOrange700,
ColorHuman100,
ColorHuman200,
ColorHuman300,
ColorHuman400,
ColorHuman500,
ColorHuman600,
ColorHuman700
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
