/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { EnveloopApi } from "@fern-api/enveloop";
import * as core from "../../../core";

export type Response = core.APIResponse<EnveloopApi.SendMessageResponse, EnveloopApi.messages.send.Error>;
export type Error = EnveloopApi.messages.send.Error._Unknown;

export declare namespace Error {
  interface _Unknown extends _Utils {
    statusCode: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <_Result>(visitor: EnveloopApi.messages.send.Error._Visitor<_Result>) => _Result;
  }

  interface _Visitor<_Result> {
    _other: (value: core.Fetcher.Error) => _Result;
  }
}

export const Error = {
  _unknown: (fetcherError: core.Fetcher.Error): EnveloopApi.messages.send.Error._Unknown => {
    const valueWithoutVisit = fetcherError as unknown as Omit<EnveloopApi.messages.send.Error._Unknown, "_visit">;
    return core.addNonEnumerableProperty(valueWithoutVisit, "_visit", function <
      _Result
    >(this: EnveloopApi.messages.send.Error._Unknown, visitor: EnveloopApi.messages.send.Error._Visitor<_Result>) {
      return EnveloopApi.messages.send.Error._visit(this, visitor);
    });
  },

  _visit: <_Result>(
    value: EnveloopApi.messages.send.Error,
    visitor: EnveloopApi.messages.send.Error._Visitor<_Result>
  ): _Result => {
    switch (value.statusCode) {
      default:
        return visitor._other(value as any);
    }
  },
} as const;
