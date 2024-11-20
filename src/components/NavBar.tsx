"use client"
import React, { useState } from 'react';

const NavigationWithRegionSelector = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('United States');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [isNavOpen, setIsNavOpen] = useState(false); // State to toggle the nav menu

  const currencyMap: Record<string, string> = {
    'United States': 'USD',
    'Canada': 'CAD',
    'Mexico': 'MXN',
    'Argentina': 'ARS',
    'Brazil': 'BRL',
    'Chile': 'CLP',
    'Colombia': 'COP',
    'Peru': 'PEN',
    'Germany': 'EUR',
    'France': 'EUR',
    'Italy': 'EUR',
    'Spain': 'EUR',
    'Portugal': 'EUR',
    'United Kingdom': 'GBP',
    'Switzerland': 'CHF',
    'Russia': 'RUB',
    'Sweden': 'SEK',
    'Norway': 'NOK',
    'Denmark': 'DKK',
    'South Africa': 'ZAR',
    'Nigeria': 'NGN',
    'Kenya': 'KES',
    'Egypt': 'EGP',
    'Ghana': 'GHS',
    'China': 'CNY',
    'Japan': 'JPY',
    'India': 'INR',
    'South Korea': 'KRW',
    'Singapore': 'SGD',
    'Thailand': 'THB',
    'Saudi Arabia': 'SAR',
    'United Arab Emirates': 'AED',
    'Israel': 'ILS',
    'Turkey': 'TRY',
    'Qatar': 'QAR',
    'Kuwait': 'KWD',
    'Australia': 'AUD',
    'New Zealand': 'NZD',
    'Fiji': 'FJD',
    'Kazakhstan': 'KZT',
    'Uzbekistan': 'UZS'
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value;
    setSelectedRegion(region);
    setSelectedCurrency(currencyMap[region]);
  };

  const handleSaveSettings = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-white p-4 shadow-md">
        <div className="flex items-center justify-end">

          {/* Hamburger Icon (Mobile only) */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            &#9776;
          </button>
        </div>

        {/* Navigation Links (Desktop and Mobile) */}
        <ul
          className={`lg:flex lg:gap-8 items-center mt-4 lg:mt-0 transition-all duration-300 ease-in-out ${
            isNavOpen ? 'block' : 'hidden'
          }`}
        >
          <li className="cursor-pointer p-2 rounded hover:bg-gray-100">Trip Boards</li>
          <li className="cursor-pointer p-2 rounded hover:bg-gray-100">List Your Property</li>
          <li className="cursor-pointer p-2 rounded hover:bg-gray-100">Help</li>
          <li className="cursor-pointer p-2 rounded hover:bg-gray-100">My Trips</li>
          <li className="cursor-pointer p-2 rounded hover:bg-gray-100">Sign in</li>

          {/* Region Selector (Mobile and Desktop) */}
          <li
            className="cursor-pointer p-2 rounded hover:bg-gray-100"
            onClick={() => setIsPopupOpen(true)}
          >
            {selectedRegion}
          </li>
        </ul>
      </nav>

      {/* Popup Overlay */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-xl font-semibold">Display settings</h3>
              <button
                className="text-xl font-bold text-gray-500"
                onClick={() => setIsPopupOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Changing your region could change your rewards program
              </p>
              <p className="text-sm text-gray-600">
                To stay with your current rewards program, keep your region the same. One Key is currently only available in select regions.
              </p>

              <div>
                <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                  Region
                </label>
                <select
                  id="region"
                  value={selectedRegion}
                  onChange={handleRegionChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Chile">Chile</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Peru">Peru</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                        <option value="Italy">Italy</option>
                        <option value="Spain">Spain</option>
                        <option value="Portugal">Portugal</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Russia">Russia</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Norway">Norway</option>
                        <option value="Denmark">Denmark</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Egypt">Egypt</option>
                        <option value="Ghana">Ghana</option>
                        <option value="China">China</option>
                        <option value="Japan">Japan</option>
                        <option value="India">India</option>
                        <option value="South Korea">South Korea</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="Israel">Israel</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Australia">Australia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                </select>
              </div>

              <div>
                <label htmlFor="currency" className="block text-sm font-medium text-gray-700">
                  Currency
                </label>
                <select
                  id="currency"
                  value={selectedCurrency}
                  disabled
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100 cursor-not-allowed"
                >
                  <option value="USD">USD</option>
                        <option value="CAD">CAD</option>
                        <option value="MXN">MXN</option>
                        <option value="ARS">ARS</option>
                        <option value="BRL">BRL</option>
                        <option value="CLP">CLP</option>
                        <option value="COP">COP</option>
                        <option value="PEN">PEN</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="CHF">CHF</option>
                        <option value="RUB">RUB</option>
                        <option value="SEK">SEK</option>
                        <option value="NOK">NOK</option>
                        <option value="DKK">DKK</option>
                        <option value="ZAR">ZAR</option>
                        <option value="NGN">NGN</option>
                        <option value="KES">KES</option>
                        <option value="EGP">EGP</option>
                        <option value="GHS">GHS</option>
                        <option value="CNY">CNY</option>
                        <option value="JPY">JPY</option>
                        <option value="INR">INR</option>
                        <option value="KRW">KRW</option>
                        <option value="SGD">SGD</option>
                        <option value="THB">THB</option>
                        <option value="SAR">SAR</option>
                        <option value="AED">AED</option>
                        <option value="ILS">ILS</option>
                        <option value="TRY">TRY</option>
                        <option value="QAR">QAR</option>
                        <option value="KWD">KWD</option>
                        <option value="AUD">AUD</option>
                        <option value="NZD">NZD</option>
                        <option value="FJD">FJD</option>
                        <option value="KZT">KZT</option>
                        <option value="UZS">UZS</option>
                </select>
              </div>

              <button
                className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500"
                onClick={handleSaveSettings}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationWithRegionSelector;
