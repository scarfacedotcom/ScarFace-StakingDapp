import React from "react";

function HomePage() {
  return (
    <div className="bg-gray-100 h-screen">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Scar Face Staking Platform
          </h1>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            blandit mauris eu purus consectetur, at malesuada risus blandit.
            Mauris sit amet sapien non urna tincidunt mattis.
          </p>
        </div> */}

        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Scar Face Staking Platform
          </h1>
          <p className="text-lg text-gray-500">
            Scar Face Staking Platform is a blockchain-based platform that
            allows users to earn rewards by staking their cryptocurrencies.
            Staking is the process of holding a cryptocurrency in a digital
            wallet and using it to support the operations of a blockchain
            network. By staking their cryptocurrency, users can earn rewards in
            the form of additional cryptocurrency. Staking is becoming
            increasingly popular, with over $100 billion worth of
            cryptocurrencies currently being staked across various networks.
          </p>
          <p className="text-lg text-gray-500">
            Scar Face Staking Platform offers a user-friendly interface for
            staking various cryptocurrencies, including Bitcoin, Ethereum, and
            Cardano. Our platform has a high staking yield, with an average
            annual return of 12%. Scar Face Staking Platform also offers
            advanced security features to ensure the safety of our users' funds.
          </p>
          <p className="text-lg text-gray-500">
            Join Scar Face Staking Platform today and start earning rewards for
            supporting the blockchain networks of the future.
          </p>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
