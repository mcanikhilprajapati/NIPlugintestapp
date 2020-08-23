/********* NetworkInternational.m Cordova Plugin Implementation *******/

#import <Cordova/CDV.h>

@interface NetworkInternational : CDVPlugin {
  // Member variables go here.
}

- (void)makePayment:(CDVInvokedUrlCommand*)command;
@end

@implementation NetworkInternational

- (void)makePayment:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    NSString* echo = [command.arguments objectAtIndex:0];
     NSLog(@"test");

//
//     if (echo != nil && [echo length] > 0) {
//         pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];
//     } else {
//         pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
//     }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
