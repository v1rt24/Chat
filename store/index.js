import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const serverUrl = 'http://localhost:3000';

export default new Vuex.Store({
  state: {
    contacts: [],
    currentUserChat: '',
    chats: [],
  },
  getters: {
    getContacts: state => state.contacts,
    getContactName: state => state.currentUserChat,
    getChats: state => state.chats,
  },
  mutations: {
    setContactsToStore (state, contacts) {
      state.contacts = contacts;
    },
    setUserToHeader (state, contactName) {
      state.currentUserChat = contactName;
    },
    setChatsToStore (state, chats) {
      state.chats = chats;
    },
  },
  actions: {
    async fetchContacts ({commit}) {
      try {
        const res = await fetch(`${serverUrl}/contacts`);

        if (!res.ok) {
          await Promise.reject({
            status: res.status,
            statusText: `${res.statusText}: ${res.url}`,
          });
        }

        commit('setContactsToStore', await res.json());
      }
      catch (error) {
        throw error;
      }
    },
    setUserToHeader ({commit}, contactName) {
      commit('setUserToHeader', contactName);
    },
    async fetchChats ({commit}) {
      try {
        const res = await fetch(`${serverUrl}/chats`);

        if (!res.ok) {
          await Promise.reject({
            status: res.status,
            statusText: `${res.statusText}: ${res.url}`,
          });
        }

        commit('setChatsToStore', await res.json());
      }
      catch (error) {
        throw error;
      }
    },
    async fetchMessageSave ({commit}, {userId, chat}) {
      try {
        const res = await fetch(`${serverUrl}/chats/${userId}/`, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(chat),
        });

        if (!res.ok) {
          await Promise.reject({
            status: res.status,
            statusText: `${res.statusText}: ${res.url}`,
          });
        }

        console.log(await res.json());
      }
      catch (error) {
        throw error;
      }
    },
  },
  modules: {},
});
