import Cache from ".";
import * as Conversation from "./conversation.interface";

const CONVERSATION_KEY = "cnv-";
const FEATURE_CONVERSATION_KEY = "ft-cnv-";

export const setConversation = async (id: string, conversation: Conversation.Conversation): Promise<any> => {
  const cache = Cache.getInstance().getCache();
  try {
    cache.json.set(`${CONVERSATION_KEY}${id}`, ".", conversation as any);
  } catch (error) {
    throw error;
  }
};

export const getConversation = async (id: string): Promise<Conversation.Conversation> => {
  const cache = Cache.getInstance().getCache();
  const conversation = await cache.json.get(`${CONVERSATION_KEY}${id}`);
  return conversation as unknown as Conversation.Conversation;
};

export const updateContext = async (id: string, context: Conversation.ContextType) => {
  const cache = Cache.getInstance().getCache();
  const conversation = (await cache.json.get(`${CONVERSATION_KEY}${id}`)) as unknown as Conversation.Conversation;
  conversation.context.type = context;
  cache.json.set(`${CONVERSATION_KEY}${id}`, ".", conversation as any);
};

export const deleteConversation = async (id: string) => {
  const cache = Cache.getInstance().getCache();
  await cache.json.del(`${CONVERSATION_KEY}${id}`);
};

export const setFeatureConversation = async (
  id: string,
  conversation: Conversation.FeatureConversation
): Promise<any> => {
  const cache = Cache.getInstance().getCache();
  try {
    cache.json.set(`${FEATURE_CONVERSATION_KEY}${id}`, ".", conversation as any);
  } catch (error) {
    throw error;
  }
};

export const getFeatureConversation = async (id: string) => {
  const cache = Cache.getInstance().getCache();
  const conversation = await cache.json.get(`${FEATURE_CONVERSATION_KEY}${id}`);
  return conversation as unknown as Conversation.FeatureConversation;
};

export const deleteFeatureConversation = async (id: string) => {
  const cache = Cache.getInstance().getCache();
  await cache.json.del(`${FEATURE_CONVERSATION_KEY}${id}`);
};
