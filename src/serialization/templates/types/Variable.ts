/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { EnveloopApi } from "@fern-api/enveloop";
import * as core from "../../../core";

export const Variable: core.schemas.Schema<serializers.Variable.Raw, EnveloopApi.Variable> = core.schemas.string();

export declare namespace Variable {
  type Raw = string;
}
