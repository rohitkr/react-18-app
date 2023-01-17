
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Mon, 16 Jan 2023 18:19:42 GMT


#import "StyleDictionaryColor.h"

@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.973f blue:0.961f alpha:1.000f],
[UIColor colorWithRed:0.996f green:0.886f blue:0.839f alpha:1.000f],
[UIColor colorWithRed:0.961f green:0.533f blue:0.341f alpha:1.000f],
[UIColor colorWithRed:0.894f green:0.349f blue:0.075f alpha:1.000f],
[UIColor colorWithRed:0.780f green:0.286f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.620f green:0.255f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.529f green:0.231f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.988f green:0.988f blue:0.992f alpha:1.000f],
[UIColor colorWithRed:0.965f green:0.965f blue:0.976f alpha:1.000f],
[UIColor colorWithRed:0.949f green:0.949f blue:0.973f alpha:1.000f],
[UIColor colorWithRed:0.925f green:0.925f blue:0.953f alpha:1.000f],
[UIColor colorWithRed:0.875f green:0.867f blue:0.906f alpha:1.000f],
[UIColor colorWithRed:0.753f green:0.745f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.600f green:0.592f blue:0.667f alpha:1.000f],
[UIColor colorWithRed:0.420f green:0.412f blue:0.482f alpha:1.000f],
[UIColor colorWithRed:0.322f green:0.314f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.239f green:0.235f blue:0.322f alpha:1.000f],
[UIColor colorWithRed:0.169f green:0.169f blue:0.251f alpha:1.000f],
[UIColor colorWithRed:0.122f green:0.122f blue:0.196f alpha:1.000f],
[UIColor colorWithRed:0.945f green:0.996f blue:0.976f alpha:1.000f],
[UIColor colorWithRed:0.851f green:0.984f blue:0.933f alpha:1.000f],
[UIColor colorWithRed:0.424f green:0.918f blue:0.729f alpha:1.000f],
[UIColor colorWithRed:0.141f green:0.859f blue:0.573f alpha:1.000f],
[UIColor colorWithRed:0.129f green:0.678f blue:0.451f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.522f blue:0.345f alpha:1.000f],
[UIColor colorWithRed:0.063f green:0.416f blue:0.251f alpha:1.000f],
[UIColor colorWithRed:0.047f green:0.333f blue:0.196f alpha:1.000f],
[UIColor colorWithRed:0.941f green:0.976f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.843f green:0.937f blue:0.996f alpha:1.000f],
[UIColor colorWithRed:0.494f green:0.780f blue:0.988f alpha:1.000f],
[UIColor colorWithRed:0.180f green:0.620f blue:0.980f alpha:1.000f],
[UIColor colorWithRed:0.035f green:0.459f blue:0.843f alpha:1.000f],
[UIColor colorWithRed:0.051f green:0.349f blue:0.671f alpha:1.000f],
[UIColor colorWithRed:0.012f green:0.239f blue:0.518f alpha:1.000f],
[UIColor colorWithRed:0.996f green:0.984f blue:0.922f alpha:1.000f],
[UIColor colorWithRed:0.996f green:0.969f blue:0.839f alpha:1.000f],
[UIColor colorWithRed:0.965f green:0.847f blue:0.376f alpha:1.000f],
[UIColor colorWithRed:0.957f green:0.702f blue:0.102f alpha:1.000f],
[UIColor colorWithRed:0.878f green:0.643f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.678f green:0.475f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.592f green:0.424f blue:0.027f alpha:1.000f],
[UIColor colorWithRed:0.447f green:0.310f blue:0.016f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.941f blue:0.953f alpha:1.000f],
[UIColor colorWithRed:0.996f green:0.839f blue:0.867f alpha:1.000f],
[UIColor colorWithRed:0.965f green:0.337f blue:0.420f alpha:1.000f],
[UIColor colorWithRed:0.890f green:0.078f blue:0.161f alpha:1.000f],
[UIColor colorWithRed:0.702f green:0.078f blue:0.114f alpha:1.000f],
[UIColor colorWithRed:0.557f green:0.063f blue:0.078f alpha:1.000f],
[UIColor colorWithRed:0.459f green:0.039f blue:0.039f alpha:1.000f],
[UIColor colorWithRed:0.980f green:0.941f blue:0.941f alpha:1.000f],
[UIColor colorWithRed:0.988f green:0.831f blue:0.839f alpha:1.000f],
[UIColor colorWithRed:0.980f green:0.698f blue:0.718f alpha:1.000f],
[UIColor colorWithRed:0.965f green:0.518f blue:0.529f alpha:1.000f],
[UIColor colorWithRed:0.941f green:0.337f blue:0.388f alpha:1.000f],
[UIColor colorWithRed:0.529f green:0.137f blue:0.271f alpha:1.000f],
[UIColor colorWithRed:0.365f green:0.094f blue:0.176f alpha:1.000f],
[UIColor colorWithRed:0.784f green:0.890f blue:0.980f alpha:1.000f],
[UIColor colorWithRed:0.949f green:0.973f blue:0.992f alpha:1.000f],
[UIColor colorWithRed:0.882f green:0.933f blue:0.980f alpha:1.000f],
[UIColor colorWithRed:0.714f green:0.820f blue:0.941f alpha:1.000f],
[UIColor colorWithRed:0.478f green:0.690f blue:0.886f alpha:1.000f],
[UIColor colorWithRed:0.157f green:0.478f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.114f green:0.373f blue:0.647f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.914f blue:0.863f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.784f blue:0.612f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.643f blue:0.314f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.420f blue:0.094f alpha:1.000f],
[UIColor colorWithRed:0.961f green:0.345f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.561f green:0.169f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.361f green:0.094f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.859f green:0.612f blue:0.467f alpha:1.000f],
[UIColor colorWithRed:0.980f green:0.757f blue:0.667f alpha:1.000f],
[UIColor colorWithRed:0.988f green:0.835f blue:0.773f alpha:1.000f],
[UIColor colorWithRed:0.749f green:0.451f blue:0.341f alpha:1.000f],
[UIColor colorWithRed:0.510f green:0.306f blue:0.231f alpha:1.000f],
[UIColor colorWithRed:0.341f green:0.184f blue:0.125f alpha:1.000f],
[UIColor colorWithRed:0.180f green:0.090f blue:0.059f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
