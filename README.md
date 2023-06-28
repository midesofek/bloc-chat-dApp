# Bloc-chat

The bloc-chat-dApp is a decentralized messaging platform that enables users subscribed to a stream to send and receive messages on-chain without paying gas fees.

Bloc-Chat is built on Streamr network and runs on Polygon Mainnet.

# Requirements

- Ensure you have metamask installed in your browser
- Create a Stream ID

Head over to https://streamr.network/hub/streams > Connect Wallet > Create Stream

or

reach out to me to gain permission to my stream

# Quickstart

1. Clone the repo

```
git clone https://github.com/midesofek/bloc-chat-dApp
cd bloc-chat-dApp
```

2. Connect to a stream

Copy and paste your Stream Id on line 12 in `streamrChat.js`

```
const streamId = "YOUR-STREAM-ID Here";
```

3. Run the file

You can run the file directly in your browser without any installations or "open with live server" in your VSCode.

Once the page loads, click the `Connect Wallet` button to connect your wallet.

> P.S: Ensure you're on the Polygon Mainnet Network

# Send and Receive Messages on-chain

Enter messages you wish to send in the input field. Then click the `Send Message` button

You'd be prompted to sign a transaction, proceed to sign.

> N.B: Sending/receiving messages do not cost gas

Your messages will be displayed in the chat window
