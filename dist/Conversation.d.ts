import * as Conversation from "./conversation.interface";
export declare const setConversation: (id: string, conversation: Conversation.Conversation) => Promise<any>;
export declare const getConversation: (id: string) => Promise<Conversation.Conversation>;
export declare const updateContext: (id: string, context: Conversation.ContextType) => Promise<void>;
export declare const deleteConversation: (id: string) => Promise<void>;
export declare const setFeatureConversation: (id: string, conversation: Conversation.FeatureConversation) => Promise<any>;
export declare const getFeatureConversation: (id: string) => Promise<Conversation.FeatureConversation>;
export declare const deleteFeatureConversation: (id: string) => Promise<void>;
