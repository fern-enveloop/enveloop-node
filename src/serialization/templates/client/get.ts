/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { EnveloopApi } from "@fern-api/enveloop";
import * as core from "../../../core";

export const Response: core.schemas.Schema<serializers.templates.get.Response.Raw, EnveloopApi.Template> =
  core.schemas.lazyObject(async () => (await import("../..")).Template);

export declare namespace Response {
  type Raw = serializers.Template.Raw;
}