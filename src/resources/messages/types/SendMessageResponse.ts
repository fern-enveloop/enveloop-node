/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SendMessageResponse {
  /** The recipient of the message */
  to: string;
  /** The from address of the message sent */
  from: string;
  /** A preview of the body of the message delivered to the recipient */
  body: string;
}
