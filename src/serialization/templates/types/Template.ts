/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { EnveloopApi } from "@fern-api/enveloop";
import * as core from "../../../core";

export const Template: core.schemas.ObjectSchema<serializers.Template.Raw, EnveloopApi.Template> = core.schemas.object({
  templateVariables: core.schemas.list(core.schemas.lazy(async () => (await import("../..")).Variable)),
  body: core.schemas.string(),
});

export declare namespace Template {
  interface Raw {
    templateVariables: serializers.Variable.Raw[];
    body: string;
  }
}
