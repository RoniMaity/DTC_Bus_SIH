<template>
  <div class="chatbot">
    <div class="chat-window" v-if="isOpen">
      <div class="header">
        <div class="small-div">Chat Status: Online</div>
      </div>
      <div class="messages">
        <div v-for="(msg, index) in messages" :key="index" class="message">
          <span
            :class="{
              'user-message': msg.isUser,
              'bot-message': !msg.isUser,
            }"
          >
            {{ msg.text }}
          </span>
        </div>
      </div>
      <div class="input-container">
        <input
          v-model="userInput"
          @keyup.enter="sendMessage"
          placeholder="Type a message..."
        />
        <button @click="sendMessage">Send</button>
        <div class="small-chat-box">
        <p>Quick Replies:</p>
        <button @click="quickReply('Hello')">Hello</button>
        <button @click="quickReply('Help')">Help</button>
        <button @click="quickReply('Thanks')">Thanks</button>
        </div>
      </div>
    </div>
    <div class="chat-icon bounce" @click="toggleChat">
      <img src="https://img.freepik.com/premium-vector/indian-women-namaste-hand-pose-with-hand-drawn-mandala_428817-1502.jpg" alt="Chatbot"/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isOpen: false,
      messages: [],
      userInput: "",
    };
  },
  methods: {
    sendMessage() {},
    toggleChat() {
      this.isOpen = !this.isOpen;
    },
  },
});
</script>
<style>
.chat-icon{
  border-radius: 50%;
  display: flex;
  height: 60px;
  width: 60px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0,0.5);
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>
