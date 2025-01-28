# Xlauncher Anchor Project

This project is built using the Anchor framework for the Solana blockchain. It allows users to launch tokens on the Solana blockchain directly from X by tagging the @Xlauncher account.

## Features
- **Launch Tokens**: Instantly create tokens with a simple command.
- **Solana Integration**: Uses Anchor for seamless interaction with the blockchain.

## Project Structure
```
Xlauncher/
├── programs/                # Solana programs folder (Rust smart contracts)
│   └── xlauncher/           # Main Anchor program
├── migrations/              # Deployment scripts
├── tests/                   # Anchor tests using Mocha/Chai
├── Anchor.toml              # Anchor configuration file
└── README.md                # Documentation for the project
```

## Getting Started
1. Install Solana CLI and Anchor:
   ```bash
   sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
   cargo install --git https://github.com/coral-xyz/anchor --tag v0.27.0 anchor-cli
   ```

2. Build and deploy the program:
   ```bash
   anchor build
   anchor deploy
   ```

3. Run tests:
   ```bash
   anchor test
   ```

## License
This project is licensed under the MIT License.
