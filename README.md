# XCL AI  Docs
XCL AI is an autonomous agent for deploying tokens. Currently, users may request clanker to deploy an ERC-20 token on Base by tagging it @XCL.AI on X (Twitter).
## Introduction
This project demonstrates an AI-powered system that enables users to launch their own tokens on the Solana blockchain simply by tagging @XCL.AI on X(Twitter). The process is fully automated, from token creation to listing on popular platforms like Dexscreener and Pumpfun.
## Technology Stack
### 1. Blockchain: Solana
Token Standard: SPL Token
Key Features: High throughput, low fees, fast transaction confirmation

### 2. Smart Contracts: Rust & Anchor Framework
Anchor: A framework for Solana programs, simplifying development by providing tools for building, testing, and deploying on-chain programs.
Rust: The programming language used to write smart contracts on Solana, known for its safety and performance.

### 3. AI Integration: Python & NLP Libraries
Purpose: AI models are used to analyze and process user requests on social media, identifying legitimate launch commands and automating responses.
Tools:
Natural Language Processing (NLP): For interpreting user intent in tweets.
Sentiment Analysis: Ensuring the legitimacy and intent of commands before initiating the token launch process.

### 4. Automation & Scheduling: Node.js
Node.js: Used for backend automation, handling requests, interacting with the blockchain, and managing scheduled tasks.
Express.js: A web framework for building RESTful APIs to interact with the frontend and third-party platforms.

### 5. Frontend Display: React
Purpose: Display the status of token launches and provide a user interface for managing the launched tokens.
Integration: Fetches real-time data from Solana and displays token metrics, transaction history, and listing statuses.

### 6. Database: MongoDB
Purpose: Stores metadata about launched tokens, user interactions, and transaction logs.
## Architecture
### System Flow
1. User Interaction:
A user tweets: "Hey, I wanna launch a coin @XCL.AI".

2. AI Processing:
The AI module reads and interprets the tweet, extracting the command.
Sentiment analysis ensures the tweet's intent aligns with launching a token.

3. Token Creation:
The backend service triggers the Solana smart contract to create a new SPL token.
Parameters like token supply, decimals, and metadata are configured automatically.

4. Automatic Listing:
Post token creation, the service integrates with platforms like Dexscreener or Pumpkin to list the token.
Updates about the listing status are tweeted back to the user.

5. Real-Time Updates:
Users can view token details, including price, volume, and market cap, on a web interface linked to the Solana blockchain.
### Diagram
```
User -> Tweet -> AI Processing -> Backend Automation -> Solana Blockchain -> Listing -> User Feedback
```
## Smart Contract Development
### Setting
Install Rust and the Solana CLI:
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
solana-install init
```
### Writing the Smart Contract
```rust
use anchor_lang::prelude::*;

#[program]
pub mod token_launcher {
    use super::*;

    pub fn launch_token(ctx: Context<LaunchToken>, initial_supply: u64) -> ProgramResult {
        // Logic to mint and initialize a new SPL token
        Ok(())
    }
}

#[derive(Accounts)]
pub struct LaunchToken<'info> {
    #[account(mut)]
    pub mint: Account<'info, Mint>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub token_program: Program<'info, Token>,
}
```
### Deploying the Contract
Compile and deploy the contract:
```ruby
anchor build
solana program deploy target/deploy/token_launcher.so
```
## AI Proccesing
### Setup
Install Python libraries:
```ruby
pip install tweepy textblob
```
### Code
```python
import tweepy
from textblob import TextBlob

def analyze_tweet(tweet):
    analysis = TextBlob(tweet.text)
    return analysis.sentiment.polarity > 0.5

tweets = api.search(q="@launchername launch", lang="en", count=10)
for tweet in tweets:
    if analyze_tweet(tweet):
        print(f"Launching token for: {tweet.text}")
        # Trigger token launch process
```
## Backend Automation
### Setup
Install Node.js and dependencies:

```ruby
npm install express
```
### Code
```javascript
const express = require('express');
const app = express();
const { launchToken } = require('./blockchain');

app.post('/launch', (req, res) => {
    const { userId, tokenDetails } = req.body;
    launchToken(userId, tokenDetails)
        .then(response => res.json({ success: true, data: response }))
        .catch(error => res.json({ success: false, error: error.message }));
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

## Frontend Display
### Setup
Install React and create a new app:
```ruby
npx create-react-app token-launcher-ui
```
### Code
```javascript
import React, { useState, useEffect } from 'react';

const TokenInfo = ({ tokenAddress }) => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`/api/token/${tokenAddress}`)
            .then(response => response.json())
            .then(data => setData(data));
    }, [tokenAddress]);

    return (
        <div>
            <h1>Token Info</h1>
            <p>Name: {data.name}</p>
            <p>Symbol: {data.symbol}</p>
            <p>Supply: {data.supply}</p>
        </div>
    );
};

export default TokenInfo;
```
## Social Media Integration
### Setup
Install Twitter API library:
```bash
npm install twitter
```
### Code
```javascript
const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

function postUpdate(status) {
    client.post('statuses/update', { status }, function(error, tweet, response) {
        if (!error) {
            console.log(tweet);
        }
    });
}
```
## Social Media Integration
### Deploying Backend
Use a platform like Heroku or AWS to deploy the backend service.
### Deploying Frontend
Deploy the frontend using Vercel, Netlify, or another hosting service.

