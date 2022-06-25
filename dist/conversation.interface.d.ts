import { IncomeImage, IncomeInteractive, IncomeLocation, IncomeMessage, IncomeMessageType, IncomeText } from "@shoopi/whatsapp-cloud-api-responder/dist/income";
import { OutcomeMessageTypes, Sender } from "@shoopi/whatsapp-cloud-api-responder/dist/outcome";
import { Contact } from "@shoopi/whatsapp-cloud-api-responder/src/contact";
/**
 * Context types for a conversation:
 * -@unknow Its could be trigger when don't have context in the conversation.
 * -@welcome for initial message.
 * -@waiting_for_action could be button or list response.
 * -@waiting_for_information the convsersation is wating for the user to send some sort of information like name.
 * -@user_request_information When the user request information.
 * -@waiting_to_talk_with_human The conversation its in the queue to talk with someone.
 * -@talking_with_human This is for redirect the message for thirdparty services like discord, slack, telegram.
 */
export declare type ContextType = "unknow" | "welcome" | "waiting_for_action" | "waiting_for_information" | "user_request_information" | "waiting_to_talk_with_human" | "talking_with_human";
export interface ExpectedResponse {
    type: IncomeMessageType | null;
    image?: IncomeImage;
    text?: IncomeText;
    location?: IncomeLocation;
    interactive?: IncomeInteractive | null;
}
export interface Context {
    type: ContextType | null;
    last_message?: IncomeMessage;
    last_message_send: OutcomeMessageTypes | null;
    expected_response: ExpectedResponse;
}
export interface Conversation {
    id: string;
    sender: Sender;
    contact: Contact;
    context: Context;
    messages: Array<IncomeMessage>;
}
export interface FeatureConversation {
    id: string;
    topic: string;
    sender: Sender;
    contact: Contact;
}
