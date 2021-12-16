import { JsonObject, JsonProperty } from "json2typescript";
import CommonModuleMetadata from "./CommonModuleMetadata";

@JsonObject("TokenModuleMetadata")
export default class TokenModuleMetadata extends CommonModuleMetadata {
  /**
   * The symbol for the Currency (required)
   */
  @JsonProperty("symbol", String)
  symbol = "";
}