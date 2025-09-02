import { WalletProvider } from "./app/Wallets/WalletProvider";
import { Wallets } from "./app/Wallets/Wallets";
import { ThemeProvider } from "./contexts/themeProviderContext";

function App() {
  return (
    <ThemeProvider>
      <WalletProvider>
        <div className="flex w-full justify-center">
          <Wallets />
        </div>
      </WalletProvider>
    </ThemeProvider>
  );
}

export default App;
