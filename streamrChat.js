// Selecting Elements
const messageWindow = document.getElementById("message--window");
const inputMessage = document.getElementById("message--input");
const btnConnectWallet = document.getElementById("connect-wallet");
const btnSubmit = document.getElementById("submit--button");

// Initialize the client with an Ethereum account
const streamrClient = new StreamrClient({
  auth: { ethereum: window.ethereum },
});

const connectWallet = async () => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    await provider.send("eth_requestAccounts", []);

    const signer = await provider.getSigner();

    const address = await signer.getAddress();

    const truncatedAddress = address.slice(0, 4) + ".." + address.slice(-2);
    btnConnectWallet.innerHTML = `Connected ${truncatedAddress}`;
  } catch (error) {
    console.log("Error Connecting: ", error);
    btnConnectWallet.innerHTML = "Connect Wallet";
  }
};

// Get StreamId
const streamId = "0x1339514086fc15c5e38af4e0407c469ca3911992/35153/0";

async function sendMessage() {
  try {
    const message = inputMessage.value;
    // console.log(message);
    console.log("CREATING MESSAGES..........");

    // ======== CREATING MESSAGES ========= //
    // Publish the message to the chat stream
    await streamrClient.publish(streamId, { message });
    inputMessage.value = "";

    // Clear the input field

    // ENABLING SUBSCRIPTIONS TO STREAM
    console.log("Subscribing to MESSAGES..........");
    await streamrClient.subscribe(streamId, (message) => {
      console.log(message);
    });
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    messageWindow.appendChild(messageElement);
  } catch (error) {
    console.error(error);
  }
}