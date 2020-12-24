window.asafonov = {};
window.asafonov.messageBus = new MessageBus();
window.asafonov.events = {
};
window.asafonov.settings = {
};
window.onerror = (msg, url, line) => {
  alert(`${msg} on line ${line}`);
}
