# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: session.js >> login authenticator
- Location: tests/session.js:7:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//button[@id=\'btn-user-menu\']//span[1]')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "Sandlight Travels SandlightTravels" [ref=e4] [cursor=pointer]:
        - /url: /
        - img "Sandlight Travels" [ref=e5]
        - heading "SandlightTravels" [level=1] [ref=e6]
      - navigation [ref=e7]:
        - link "Home" [ref=e8] [cursor=pointer]:
          - /url: /
        - link "Hotels" [ref=e9] [cursor=pointer]:
          - /url: /hotels/search
        - button "Experiences expand_more" [ref=e11] [cursor=pointer]:
          - text: Experiences
          - generic [ref=e12]: expand_more
        - link "About" [ref=e13] [cursor=pointer]:
          - /url: /about
        - link "My Bookings" [ref=e14] [cursor=pointer]:
          - /url: /account/bookings
      - generic [ref=e15]:
        - button "Toggle dark mode" [ref=e16] [cursor=pointer]:
          - generic [ref=e17]: dark_mode
        - button "£ GBP expand_more" [ref=e19] [cursor=pointer]:
          - generic [ref=e20]: £
          - generic [ref=e21]: GBP
          - generic [ref=e22]: expand_more
        - link "Login" [ref=e23] [cursor=pointer]:
          - /url: /login
        - link "Register" [ref=e24] [cursor=pointer]:
          - /url: /register
  - main [ref=e25]:
    - generic [ref=e26]:
      - img "Pristine tropical white sand beach with turquoise water" [ref=e29]
      - generic [ref=e30]:
        - heading "Find Your Perfect Escape" [level=2] [ref=e31]
        - paragraph [ref=e32]: UK's trusted travel experts with full financial protection.
        - generic [ref=e34]:
          - generic [ref=e35]:
            - generic [ref=e36]: Destination
            - generic [ref=e37]:
              - generic [ref=e38]: location_on
              - textbox "Where are you going?" [ref=e39]
          - generic [ref=e40]:
            - generic [ref=e41]: Check-in
            - generic [ref=e42]:
              - generic [ref=e43]: calendar_today
              - textbox [ref=e44]: 2026-05-09
          - generic [ref=e45]:
            - generic [ref=e46]: Check-out
            - generic [ref=e47]:
              - generic [ref=e48]: calendar_today
              - textbox [ref=e49]: 2026-05-10
          - generic [ref=e50]:
            - generic [ref=e51]: Guests
            - generic [ref=e52]:
              - generic [ref=e53]: person
              - button "2Ad, 1 Ro" [ref=e54] [cursor=pointer]
          - generic [ref=e55]:
            - generic [ref=e56]: Citizenship
            - generic [ref=e57]:
              - generic [ref=e58]: flag
              - combobox [ref=e59] [cursor=pointer]:
                - option "Select..." [selected]
                - option "Afghanistan"
                - option "Albania"
                - option "Algeria"
                - option "American Samoa"
                - option "Andorra"
                - option "Angola"
                - option "Antigua and Barbuda"
                - option "Argentina"
                - option "Armenia"
                - option "Aruba"
                - option "Australia"
                - option "Austria"
                - option "Azerbaijan"
                - option "Bahamas"
                - option "Bahrain"
                - option "Bangladesh"
                - option "Barbados"
                - option "Belarus"
                - option "Belgium"
                - option "Belize"
                - option "Benin"
                - option "Bermuda"
                - option "Bhutan"
                - option "Bolivia"
                - option "Bonaire, Sint Eustatius and Saba"
                - option "Bosnia and Herzegovina"
                - option "Botswana"
                - option "Bouvet Island"
                - option "Brazil"
                - option "British Indian Ocean Territory"
                - option "Brunei Darussalam"
                - option "Bulgaria"
                - option "Burkina Faso"
                - option "Burundi"
                - option "Cabo Verde"
                - option "Cambodia"
                - option "Cameroon"
                - option "Canada"
                - option "Cayman Islands"
                - option "Central African Republic"
                - option "Chad"
                - option "Chile"
                - option "China"
                - option "Christmas Island"
                - option "Cocos (Keeling) Islands"
                - option "Colombia"
                - option "Comoros"
                - option "Congo"
                - option "Congo (Democratic Republic)"
                - option "Cook Islands"
                - option "Costa Rica"
                - option "Côte d'Ivoire"
                - option "Croatia"
                - option "Cuba"
                - option "Curaçao"
                - option "Cyprus"
                - option "Czechia"
                - option "Denmark"
                - option "Djibouti"
                - option "Dominica"
                - option "Dominican Republic"
                - option "Ecuador"
                - option "Egypt"
                - option "El Salvador"
                - option "Equatorial Guinea"
                - option "Eritrea"
                - option "Estonia"
                - option "Eswatini"
                - option "Ethiopia"
                - option "Falkland Islands"
                - option "Faroe Islands"
                - option "Fiji"
                - option "Finland"
                - option "France"
                - option "French Guiana"
                - option "French Polynesia"
                - option "French Southern Territories"
                - option "Gabon"
                - option "Gambia"
                - option "Georgia"
                - option "Germany"
                - option "Ghana"
                - option "Gibraltar"
                - option "Greece"
                - option "Greenland"
                - option "Grenada"
                - option "Guadeloupe"
                - option "Guam"
                - option "Guatemala"
                - option "Guernsey"
                - option "Guinea"
                - option "Guinea-Bissau"
                - option "Guyana"
                - option "Haiti"
                - option "Heard Island and McDonald Islands"
                - option "Holy See"
                - option "Honduras"
                - option "Hong Kong"
                - option "Hungary"
                - option "Iceland"
                - option "India"
                - option "Indonesia"
                - option "Iran"
                - option "Iraq"
                - option "Ireland"
                - option "Isle of Man"
                - option "Israel"
                - option "Italy"
                - option "Jamaica"
                - option "Japan"
                - option "Jersey"
                - option "Jordan"
                - option "Kazakhstan"
                - option "Kenya"
                - option "Kiribati"
                - option "Korea (North)"
                - option "Korea (South)"
                - option "Kuwait"
                - option "Kyrgyzstan"
                - option "Lao"
                - option "Latvia"
                - option "Lebanon"
                - option "Lesotho"
                - option "Liberia"
                - option "Libya"
                - option "Liechtenstein"
                - option "Lithuania"
                - option "Luxembourg"
                - option "Macao"
                - option "Madagascar"
                - option "Malawi"
                - option "Malaysia"
                - option "Maldives"
                - option "Mali"
                - option "Malta"
                - option "Marshall Islands"
                - option "Martinique"
                - option "Mauritania"
                - option "Mauritius"
                - option "Mayotte"
                - option "Mexico"
                - option "Micronesia"
                - option "Moldova"
                - option "Monaco"
                - option "Mongolia"
                - option "Montenegro"
                - option "Montserrat"
                - option "Morocco"
                - option "Mozambique"
                - option "Myanmar"
                - option "Namibia"
                - option "Nauru"
                - option "Nepal"
                - option "Netherlands"
                - option "New Caledonia"
                - option "New Zealand"
                - option "Nicaragua"
                - option "Niger"
                - option "Nigeria"
                - option "Niue"
                - option "Norfolk Island"
                - option "North Macedonia"
                - option "Northern Mariana Islands"
                - option "Norway"
                - option "Oman"
                - option "Pakistan"
                - option "Palau"
                - option "Palestine"
                - option "Panama"
                - option "Papua New Guinea"
                - option "Paraguay"
                - option "Peru"
                - option "Philippines"
                - option "Pitcairn"
                - option "Poland"
                - option "Portugal"
                - option "Puerto Rico"
                - option "Qatar"
                - option "Réunion"
                - option "Romania"
                - option "Russian Federation"
                - option "Rwanda"
                - option "Saint Barthélemy"
                - option "Saint Helena"
                - option "Saint Kitts and Nevis"
                - option "Saint Lucia"
                - option "Saint Martin"
                - option "Saint Pierre and Miquelon"
                - option "Saint Vincent and the Grenadines"
                - option "Samoa"
                - option "San Marino"
                - option "Sao Tome and Principe"
                - option "Saudi Arabia"
                - option "Senegal"
                - option "Serbia"
                - option "Seychelles"
                - option "Sierra Leone"
                - option "Singapore"
                - option "Sint Maarten"
                - option "Slovakia"
                - option "Slovenia"
                - option "Solomon Islands"
                - option "Somalia"
                - option "South Africa"
                - option "South Georgia"
                - option "South Sudan"
                - option "Spain"
                - option "Sri Lanka"
                - option "Sudan"
                - option "Suriname"
                - option "Svalbard and Jan Mayen"
                - option "Sweden"
                - option "Switzerland"
                - option "Syria"
                - option "Taiwan"
                - option "Tajikistan"
                - option "Tanzania"
                - option "Thailand"
                - option "Timor-Leste"
                - option "Togo"
                - option "Tokelau"
                - option "Tonga"
                - option "Trinidad and Tobago"
                - option "Tunisia"
                - option "Türkiye"
                - option "Turkmenistan"
                - option "Turks and Caicos Islands"
                - option "Tuvalu"
                - option "Uganda"
                - option "Ukraine"
                - option "United Arab Emirates"
                - option "United Kingdom"
                - option "United States"
                - option "United States Minor Outlying Islands"
                - option "Uruguay"
                - option "Uzbekistan"
                - option "Vanuatu"
                - option "Venezuela"
                - option "Viet Nam"
                - option "Virgin Islands (British)"
                - option "Virgin Islands (U.S.)"
                - option "Wallis and Futuna"
                - option "Western Sahara"
                - option "Yemen"
                - option "Zambia"
                - option "Zimbabwe"
          - button "search" [ref=e60] [cursor=pointer]:
            - generic [ref=e61]: search
    - generic [ref=e63]:
      - generic [ref=e64]:
        - generic [ref=e66]: verified_user
        - heading "Fully Protected" [level=3] [ref=e67]
        - paragraph [ref=e68]: Your money is 100% safe
      - generic [ref=e69]:
        - generic [ref=e71]: headset_mic
        - heading "24/7 Support" [level=3] [ref=e72]
        - paragraph [ref=e73]: Always here to help you
      - generic [ref=e74]:
        - generic [ref=e76]: star
        - heading "Expert Advice" [level=3] [ref=e77]
        - paragraph [ref=e78]: Personal travel specialists
      - generic [ref=e79]:
        - generic [ref=e81]: payments
        - heading "Best Price Promise" [level=3] [ref=e82]
        - paragraph [ref=e83]: Unbeatable value guaranteed
    - generic [ref=e84]:
      - generic [ref=e85]:
        - generic [ref=e86]:
          - heading "Featured Deals" [level=2] [ref=e87]
          - paragraph [ref=e88]: Hand-picked luxury holidays at exclusive prices.
        - generic [ref=e89]:
          - generic [ref=e90]:
            - button "chevron_left" [disabled] [ref=e91]:
              - generic [ref=e92]: chevron_left
            - button "chevron_right" [ref=e93] [cursor=pointer]:
              - generic [ref=e94]: chevron_right
          - link "View all deals arrow_forward" [ref=e95] [cursor=pointer]:
            - /url: /deals
            - text: View all deals
            - generic [ref=e96]: arrow_forward
      - generic [ref=e97]:
        - generic [ref=e99] [cursor=pointer]:
          - generic [ref=e100]:
            - img "Novotel Venezia Mestre Castellana" [ref=e101]
            - generic [ref=e102]: Limited Availability
          - generic [ref=e103]:
            - heading "Novotel Venezia Mestre Castellana" [level=3] [ref=e104]
            - generic [ref=e105]:
              - generic [ref=e106]:
                - generic [ref=e107]: star
                - generic [ref=e108]: star
                - generic [ref=e109]: star
                - generic [ref=e110]: star
              - generic [ref=e111]: "4.0"
            - generic [ref=e112]:
              - generic [ref=e113]: location_on
              - generic [ref=e114]: Venice, Italy
            - generic [ref=e115]:
              - generic [ref=e116]: flight_takeoff
              - generic [ref=e117]:
                - generic [ref=e118]: Fri, 17 Apr 2026
                - generic [ref=e119]: from Luton
            - generic [ref=e120]:
              - generic [ref=e121]:
                - generic [ref=e122]: dark_mode
                - text: 4 Nights
              - generic [ref=e123]:
                - generic [ref=e124]: restaurant
                - text: Bed & Breakfast
              - generic [ref=e125]:
                - generic [ref=e126]: flight
                - text: Flights
              - generic [ref=e127]:
                - generic [ref=e128]: luggage
                - text: Luggage
              - generic [ref=e129]:
                - generic [ref=e130]: airport_shuttle
                - text: Transfers
            - generic [ref=e131]:
              - generic [ref=e132]:
                - paragraph [ref=e133]: from
                - paragraph [ref=e134]: £495pp
              - generic [ref=e135]:
                - text: View deal
                - generic [ref=e136]: arrow_forward
        - generic [ref=e138] [cursor=pointer]:
          - generic [ref=e141]: image
          - generic [ref=e142]:
            - heading "Maldives Resort" [level=3] [ref=e143]
            - generic [ref=e144]:
              - generic [ref=e145]: location_on
              - generic [ref=e146]: Maldives
            - paragraph [ref=e147]: Very nice location next to the sea
            - generic [ref=e149]:
              - text: View deal
              - generic [ref=e150]: arrow_forward
        - generic [ref=e152] [cursor=pointer]:
          - generic [ref=e155]: image
          - generic [ref=e156]:
            - heading "Maldives Resort" [level=3] [ref=e157]
            - generic [ref=e158]:
              - generic [ref=e159]: location_on
              - generic [ref=e160]: Maldives
            - paragraph [ref=e161]: Very nice location next to the sea
            - generic [ref=e163]:
              - text: View deal
              - generic [ref=e164]: arrow_forward
        - generic [ref=e166] [cursor=pointer]:
          - generic [ref=e167]:
            - img "Sofia Hotel" [ref=e168]
            - generic [ref=e169]: save 400pp
          - generic [ref=e170]:
            - heading "Sofia Hotel" [level=3] [ref=e171]
            - generic [ref=e172]:
              - generic [ref=e173]:
                - generic [ref=e174]: star
                - generic [ref=e175]: star
                - generic [ref=e176]: star
              - generic [ref=e177]: "3.0"
            - generic [ref=e178]:
              - generic [ref=e179]: location_on
              - generic [ref=e180]: Crete, Greecehjkb
            - generic [ref=e181]:
              - generic [ref=e182]: flight_takeoff
              - generic [ref=e184]: from Manchester
            - generic [ref=e185]:
              - generic [ref=e186]:
                - generic [ref=e187]: dark_mode
                - text: 4 Nights
              - generic [ref=e188]:
                - generic [ref=e189]: restaurant
                - text: All Inclusive
              - generic [ref=e190]:
                - generic [ref=e191]: flight
                - text: Flights
              - generic [ref=e192]:
                - generic [ref=e193]: luggage
                - text: Luggage
            - generic [ref=e194]:
              - generic [ref=e195]:
                - paragraph [ref=e196]: from
                - paragraph [ref=e197]: £443pp
              - generic [ref=e198]:
                - text: View deal
                - generic [ref=e199]: arrow_forward
        - generic [ref=e201] [cursor=pointer]:
          - generic [ref=e202]:
            - img "Bellagio Beach Resort & Spa" [ref=e203]
            - generic [ref=e204]: Limited Offer
          - generic [ref=e205]:
            - heading "Bellagio Beach Resort & Spa" [level=3] [ref=e206]
            - generic [ref=e207]:
              - generic [ref=e208]:
                - generic [ref=e209]: star
                - generic [ref=e210]: star
                - generic [ref=e211]: star
                - generic [ref=e212]: star
                - generic [ref=e213]: star
              - generic [ref=e214]: "5.0"
            - generic [ref=e215]:
              - generic [ref=e216]: location_on
              - generic [ref=e217]: Hurghada, Egypt
            - paragraph [ref=e218]: "- Access to private beach -5 Outdoor pools with 2 heated pools - All-Inclusive - 5 Restaurants and 3 bars"
            - generic [ref=e219]:
              - generic [ref=e220]: flight_takeoff
              - generic [ref=e221]:
                - generic [ref=e222]: Sun, 19 Jul 2026
                - generic [ref=e223]: from Stansted
            - generic [ref=e224]:
              - generic [ref=e225]:
                - generic [ref=e226]: dark_mode
                - text: 7 Nights
              - generic [ref=e227]:
                - generic [ref=e228]: restaurant
                - text: All Inclusive
              - generic [ref=e229]:
                - generic [ref=e230]: flight
                - text: Flights
              - generic [ref=e231]:
                - generic [ref=e232]: luggage
                - text: Luggage
              - generic [ref=e233]:
                - generic [ref=e234]: airport_shuttle
                - text: Transfers
            - generic [ref=e235]:
              - generic [ref=e236]:
                - paragraph [ref=e237]: from
                - paragraph [ref=e238]: £1,090pp
              - generic [ref=e239]:
                - text: View deal
                - generic [ref=e240]: arrow_forward
        - generic [ref=e242] [cursor=pointer]:
          - generic [ref=e243]:
            - generic [ref=e245]: image
            - generic [ref=e246]: Limited availability
          - generic [ref=e247]:
            - heading "Maldives Resort" [level=3] [ref=e248]
            - generic [ref=e249]:
              - generic [ref=e250]:
                - generic [ref=e251]: star
                - generic [ref=e252]: star
                - generic [ref=e253]: star
                - generic [ref=e254]: star
              - generic [ref=e255]: "4.0"
            - generic [ref=e256]:
              - generic [ref=e257]: location_on
              - generic [ref=e258]: Maldives
            - paragraph [ref=e259]: Very nice location next to the sea
            - generic [ref=e260]:
              - generic [ref=e261]: flight_takeoff
              - generic [ref=e262]:
                - generic [ref=e263]: Sat, 26 Dec 2026
                - generic [ref=e264]: from Luton
            - generic [ref=e265]:
              - generic [ref=e266]:
                - generic [ref=e267]: dark_mode
                - text: 4 Nights
              - generic [ref=e268]:
                - generic [ref=e269]: restaurant
                - text: Half Board
            - generic [ref=e270]:
              - generic [ref=e271]:
                - paragraph [ref=e272]: from
                - paragraph [ref=e273]: £906pp
              - generic [ref=e274]:
                - text: View deal
                - generic [ref=e275]: arrow_forward
        - generic [ref=e277] [cursor=pointer]:
          - generic [ref=e278]:
            - generic [ref=e280]: image
            - generic [ref=e281]: Limited availability
          - generic [ref=e282]:
            - heading "almara Maldives Resort" [level=3] [ref=e283]
            - generic [ref=e284]:
              - generic [ref=e285]:
                - generic [ref=e286]: star
                - generic [ref=e287]: star
                - generic [ref=e288]: star
                - generic [ref=e289]: star
              - generic [ref=e290]: "4.0"
            - generic [ref=e291]:
              - generic [ref=e292]: location_on
              - generic [ref=e293]: Maldives
            - paragraph [ref=e294]: Very nice location next to the sea
            - generic [ref=e295]:
              - generic [ref=e296]: flight_takeoff
              - generic [ref=e297]:
                - generic [ref=e298]: Sat, 26 Dec 2026
                - generic [ref=e299]: from Luton
            - generic [ref=e300]:
              - generic [ref=e301]:
                - generic [ref=e302]: dark_mode
                - text: 4 Nights
              - generic [ref=e303]:
                - generic [ref=e304]: restaurant
                - text: Half Board
            - generic [ref=e305]:
              - generic [ref=e306]:
                - paragraph [ref=e307]: from
                - paragraph [ref=e308]: £906pp
              - generic [ref=e309]:
                - text: View deal
                - generic [ref=e310]: arrow_forward
        - generic [ref=e312] [cursor=pointer]:
          - generic [ref=e313]:
            - generic [ref=e315]: image
            - generic [ref=e316]: Limited availability
          - generic [ref=e317]:
            - heading "almara Maldives Resort" [level=3] [ref=e318]
            - generic [ref=e319]:
              - generic [ref=e320]:
                - generic [ref=e321]: star
                - generic [ref=e322]: star
                - generic [ref=e323]: star
                - generic [ref=e324]: star
              - generic [ref=e325]: "4.0"
            - generic [ref=e326]:
              - generic [ref=e327]: location_on
              - generic [ref=e328]: Maldives
            - paragraph [ref=e329]: Very nice location next to the sea
            - generic [ref=e330]:
              - generic [ref=e331]: flight_takeoff
              - generic [ref=e332]:
                - generic [ref=e333]: Sat, 26 Dec 2026
                - generic [ref=e334]: from Luton
            - generic [ref=e335]:
              - generic [ref=e336]:
                - generic [ref=e337]: dark_mode
                - text: 4 Nights
              - generic [ref=e338]:
                - generic [ref=e339]: restaurant
                - text: Half Board
            - generic [ref=e340]:
              - generic [ref=e341]:
                - paragraph [ref=e342]: from
                - paragraph [ref=e343]: £906pp
              - generic [ref=e344]:
                - text: View deal
                - generic [ref=e345]: arrow_forward
        - generic [ref=e347] [cursor=pointer]:
          - generic [ref=e348]:
            - generic [ref=e350]: image
            - generic [ref=e351]: Limited availability
          - generic [ref=e352]:
            - heading "almara Maldives Resort" [level=3] [ref=e353]
            - generic [ref=e354]:
              - generic [ref=e355]:
                - generic [ref=e356]: star
                - generic [ref=e357]: star
                - generic [ref=e358]: star
                - generic [ref=e359]: star
              - generic [ref=e360]: "4.0"
            - generic [ref=e361]:
              - generic [ref=e362]: location_on
              - generic [ref=e363]: Maldives
            - paragraph [ref=e364]: Very nice location next to the sea
            - generic [ref=e365]:
              - generic [ref=e366]: flight_takeoff
              - generic [ref=e367]:
                - generic [ref=e368]: Sat, 26 Dec 2026
                - generic [ref=e369]: from Luton
            - generic [ref=e370]:
              - generic [ref=e371]:
                - generic [ref=e372]: dark_mode
                - text: 4 Nights
              - generic [ref=e373]:
                - generic [ref=e374]: restaurant
                - text: Half Board
            - generic [ref=e375]:
              - generic [ref=e376]:
                - paragraph [ref=e377]: from
                - paragraph [ref=e378]: £906pp
              - generic [ref=e379]:
                - text: View deal
                - generic [ref=e380]: arrow_forward
        - generic [ref=e382] [cursor=pointer]:
          - generic [ref=e383]:
            - generic [ref=e385]: image
            - generic [ref=e386]: Limited availability
          - generic [ref=e387]:
            - heading "almara Maldives Resort" [level=3] [ref=e388]
            - generic [ref=e389]:
              - generic [ref=e390]:
                - generic [ref=e391]: star
                - generic [ref=e392]: star
                - generic [ref=e393]: star
                - generic [ref=e394]: star
              - generic [ref=e395]: "4.0"
            - generic [ref=e396]:
              - generic [ref=e397]: location_on
              - generic [ref=e398]: Maldives
            - paragraph [ref=e399]: Very nice location next to the sea
            - generic [ref=e400]:
              - generic [ref=e401]: flight_takeoff
              - generic [ref=e402]:
                - generic [ref=e403]: Sat, 26 Dec 2026
                - generic [ref=e404]: from Luton
            - generic [ref=e405]:
              - generic [ref=e406]:
                - generic [ref=e407]: dark_mode
                - text: 4 Nights
              - generic [ref=e408]:
                - generic [ref=e409]: restaurant
                - text: Half Board
            - generic [ref=e410]:
              - generic [ref=e411]:
                - paragraph [ref=e412]: from
                - paragraph [ref=e413]: £906pp
              - generic [ref=e414]:
                - text: View deal
                - generic [ref=e415]: arrow_forward
    - generic [ref=e417]:
      - heading "Trending Destinations" [level=2] [ref=e418]
      - generic [ref=e419]:
        - generic [ref=e420]:
          - img "Traditional Japanese temple with blossoms" [ref=e421]
          - generic [ref=e423]:
            - heading "Japan" [level=4] [ref=e424]
            - paragraph [ref=e425]: Authentic Culture
        - generic [ref=e426]:
          - img "Sunset over African Savannah with wildlife" [ref=e427]
          - generic [ref=e429]:
            - heading "Kenya" [level=4] [ref=e430]
            - paragraph [ref=e431]: Safari Adventures
        - generic [ref=e432]:
          - img "Iceland northern lights over waterfall" [ref=e433]
          - generic [ref=e435]:
            - heading "Iceland" [level=4] [ref=e436]
            - paragraph [ref=e437]: Natural Wonders
        - generic [ref=e438]:
          - img "Sydney Opera House at dusk" [ref=e439]
          - generic [ref=e441]:
            - heading "Australia" [level=4] [ref=e442]
            - paragraph [ref=e443]: Coastal Living
    - generic [ref=e444]:
      - generic [ref=e445]:
        - heading "What Our Customers Say" [level=2] [ref=e446]
        - link "Google star star star star star 5 (6 reviews)" [ref=e447] [cursor=pointer]:
          - /url: https://www.google.com/search?kgmid=/g/11ymly9hnl#lrd=0x0:0xc3e974eebe978de6,1,,,
          - img "Google" [ref=e448]
          - generic [ref=e449]:
            - generic [ref=e450]: star
            - generic [ref=e451]: star
            - generic [ref=e452]: star
            - generic [ref=e453]: star
            - generic [ref=e454]: star
          - generic [ref=e455]: "5"
          - generic [ref=e456]: (6 reviews)
      - generic [ref=e457]:
        - generic [ref=e458]:
          - generic [ref=e459]:
            - generic [ref=e460]:
              - generic [ref=e461]: star
              - generic [ref=e462]: star
              - generic [ref=e463]: star
              - generic [ref=e464]: star
              - generic [ref=e465]: star
            - img "Google" [ref=e466]
          - paragraph [ref=e467]: Sandhya has helped us in planning our holiday to Paris. The hotel was in a perfect location and had a very good stay. We took a Eurostar from London to Paris and I would definitely recommend specially if you have young kids. Thanks again for Sandhya for organising a wonderful trip. Highly recommend Sandlight Travels.
          - generic [ref=e468]:
            - generic [ref=e469]: AA
            - generic [ref=e470]:
              - paragraph [ref=e471]: Ashwin Arroju
              - paragraph [ref=e472]: a week ago
        - generic [ref=e473]:
          - generic [ref=e474]:
            - generic [ref=e475]:
              - generic [ref=e476]: star
              - generic [ref=e477]: star
              - generic [ref=e478]: star
              - generic [ref=e479]: star
              - generic [ref=e480]: star
            - img "Google" [ref=e481]
          - paragraph [ref=e482]: Excellent communications throughout and a extremely competitive price for a 5 star holiday - thanks and we will definitely travel through SL again.
          - generic [ref=e483]:
            - generic [ref=e484]: AP
            - generic [ref=e485]:
              - paragraph [ref=e486]: Amrish Patel
              - paragraph [ref=e487]: a month ago
        - generic [ref=e488]:
          - generic [ref=e489]:
            - generic [ref=e490]:
              - generic [ref=e491]: star
              - generic [ref=e492]: star
              - generic [ref=e493]: star
              - generic [ref=e494]: star
              - generic [ref=e495]: star
            - img "Google" [ref=e496]
          - paragraph [ref=e497]: Excellent service from the travel agency that helped us plan our trip to Antalya, Turkey. Their response was really amazing, very quick, and supportive throughout. Highly recommended if you need any travel assistance!
          - generic [ref=e498]:
            - generic [ref=e499]: HG
            - generic [ref=e500]:
              - paragraph [ref=e501]: Harish Gunda
              - paragraph [ref=e502]: 2 months ago
      - link "See all Google reviews open_in_new" [ref=e504] [cursor=pointer]:
        - /url: https://www.google.com/search?kgmid=/g/11ymly9hnl#lrd=0x0:0xc3e974eebe978de6,1,,,
        - text: See all Google reviews
        - generic [ref=e505]: open_in_new
    - generic [ref=e507]:
      - generic [ref=e509]: mail
      - generic [ref=e510]:
        - heading "Stay in the Loop" [level=2] [ref=e511]
        - paragraph [ref=e512]: Join 50,000+ travel lovers and get exclusive secret deals delivered to your inbox every week.
        - generic [ref=e513]:
          - generic [ref=e514]:
            - textbox "Your email address" [ref=e515]
            - button "Subscribe" [ref=e516] [cursor=pointer]
          - paragraph [ref=e517]: We respect your privacy. Unsubscribe at any time.
  - contentinfo [ref=e518]:
    - generic [ref=e519]:
      - generic [ref=e520]:
        - generic [ref=e521]:
          - generic [ref=e522]:
            - img "Sandlight Travels" [ref=e523]
            - heading "Sandlight Travels" [level=2] [ref=e524]
          - paragraph [ref=e525]: Leading UK independent travel agency. We combine expert knowledge with unbeatable service to create your perfect getaway.
          - list [ref=e526]:
            - listitem [ref=e527]:
              - generic [ref=e528]: call
              - link "0800 031 5285" [ref=e529] [cursor=pointer]:
                - /url: tel:08000315285
            - listitem [ref=e530]:
              - generic [ref=e531]: mail
              - link "info@sandlighttravels.co.uk" [ref=e532] [cursor=pointer]:
                - /url: mailto:info@sandlighttravels.co.uk
            - listitem [ref=e533]:
              - img [ref=e534]
              - link "WhatsApp Us" [ref=e536] [cursor=pointer]:
                - /url: https://wa.me/447425910458?text=Good%20day%2C%20I%20am%20writing%20to%20enquire%20about%20a%20holiday%20package.
          - generic [ref=e537]:
            - link [ref=e538] [cursor=pointer]:
              - /url: https://www.facebook.com/sandlighttravels
              - img [ref=e539]
            - link [ref=e541] [cursor=pointer]:
              - /url: https://www.instagram.com/sandlighttravels
              - img [ref=e542]
            - link [ref=e544] [cursor=pointer]:
              - /url: https://www.linkedin.com/company/sandlighttravels
              - img [ref=e545]
        - generic [ref=e547]:
          - heading "Quick Links" [level=4] [ref=e548]
          - list [ref=e549]:
            - listitem [ref=e550]:
              - link "About Us" [ref=e551] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e552]:
              - link "Contact Us" [ref=e553] [cursor=pointer]:
                - /url: /contact
            - listitem [ref=e554]:
              - link "Transfers" [ref=e555] [cursor=pointer]:
                - /url: /experiences/transfers
            - listitem [ref=e556]:
              - link "Airport Lounges" [ref=e557] [cursor=pointer]:
                - /url: /experiences/lounges
            - listitem [ref=e558]:
              - link "Tours & Activities" [ref=e559] [cursor=pointer]:
                - /url: /experiences/get-your-guide
            - listitem [ref=e560]:
              - link "Travel Insurance" [ref=e561] [cursor=pointer]:
                - /url: /experiences/travel-insurance
        - generic [ref=e562]:
          - heading "Support" [level=4] [ref=e563]
          - list [ref=e564]:
            - listitem [ref=e565]:
              - link "Manage Booking" [ref=e566] [cursor=pointer]:
                - /url: /account/bookings
            - listitem [ref=e567]:
              - link "Financial Protection" [ref=e568] [cursor=pointer]:
                - /url: /protection
            - listitem [ref=e569]:
              - link "Terms & Conditions" [ref=e570] [cursor=pointer]:
                - /url: /terms
            - listitem [ref=e571]:
              - link "Privacy Policy" [ref=e572] [cursor=pointer]:
                - /url: /privacy
            - listitem [ref=e573]:
              - link "Cookie Policy" [ref=e574] [cursor=pointer]:
                - /url: /cookies
        - generic [ref=e575]:
          - heading "Our Partners" [level=4] [ref=e576]
          - generic [ref=e577]:
            - generic [ref=e578]: easyJet
            - generic [ref=e579]: TUI
            - generic [ref=e580]: Jet2
            - generic [ref=e581]: P&O Cruises
            - generic [ref=e582]: MSC Cruises
            - generic [ref=e583]: RCI
          - paragraph [ref=e584]: Partnered with the UK's leading travel operators to bring you the best deals.
      - generic [ref=e585]:
        - paragraph [ref=e586]: © 2026 Sandlight Travels. All rights reserved.
        - generic [ref=e587]:
          - img "Visa logo" [ref=e588]
          - img "Mastercard logo" [ref=e589]
  - link [ref=e590] [cursor=pointer]:
    - /url: https://wa.me/447425910458?text=Good%20day%2C%20I%20am%20writing%20to%20enquire%20about%20a%20holiday%20package.
    - img [ref=e591]
  - alert [ref=e593]: Sandlight Travels | Premium UK Travel Agency | Sandlight Travels
```

# Test source

```ts
  1  | import {expect} from '@playwright/test'
  2  | import {getHotelDetails} from "../utils/excelHandling"
  3  | 
  4  | export class Home{
  5  | 
  6  |     constructor(page)
  7  |     {
  8  |         this.page=page
  9  |         this.loginBtn=page.locator("//a[@href='/login']")
  10 |         this.expandBtn=page.locator("//button[@id='btn-user-menu']/span[contains(text(),'expand_more')]")
  11 |         this.adminPanelBtn=page.locator("//a[contains(text(),'Admin Panel')]")
  12 |         this.statusMessage=page.locator("//div[@role='status']")
  13 |         this.userNameBtn=page.locator("#btn-user-menu")
  14 |         this.username=page.locator("//button[@id='btn-user-menu']//span[1]")
  15 |         this.destination=page.locator("#destination")
  16 |         this.selectDestination=page.locator("//input[@id='destination']/following-sibling::div//p[1]")
  17 |         this.checkin=page.locator("//input[@id='checkin']")
  18 |         this.checkout=page.locator("//input[@id='checkout']")
  19 |         this.guests=page.locator("#btn-guests-toggle")
  20 |         this.rooms_count=page.locator("#rooms-count")
  21 |         this.adults_count=page.locator("#room-0-adults-count")
  22 |         this.children_count=page.locator("#room-0-children-count")
  23 |         this.adult_plus_btn=page.locator("#btn-room-0-adults-plus")
  24 |         this.adult_minus_btn=page.locator("#btn-room-0-adults-minus")
  25 |         this.child_plus_btn=page.locator("#btn-room-0-children-plus")
  26 |         this.applyBtn=page.locator("#btn-guests-apply")
  27 |         this.citizen_select=page.locator("#select-citizenship")
  28 |         this.searchBtn=page.locator("#btn-search")
  29 | 
  30 | 
  31 | 
  32 |     }
  33 |     async clickOnLogin(){
  34 |         await this.loginBtn.click()
  35 |     }
  36 |     async goToAdminPanel(){
  37 |         await this.expandBtn.click()
  38 |         await this.adminPanelBtn.click()
  39 | 
  40 |     }
  41 |     async verifyUserBtn(){
  42 |         await expect(this.userNameBtn).toBeVisible()
  43 |     }
  44 |     async waitForStatusToDisappear()
  45 |     {
  46 |         await expect(this.statusMessage).toBeHidden();
  47 |     }
  48 |     async verifyAdminPanel(){
> 49 |         console.log(await this.username.textContent())
     |                                         ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  50 |         await expect(this.username).toContainText("Admin")
  51 |     }
  52 |     async enterHotelDetails(hotelData){
  53 | 
  54 |         this.getExcelData(hotelData)
  55 |         // await this.destination.fill("paris")
  56 |         // await this.page.waitForTimeout(4000)
  57 |         // await this.selectDestination.first().click();
  58 |         // await this.checkin.click()
  59 |         
  60 | 
  61 | 
  62 | 
  63 |     }
  64 |     async getExcelData(hotelData){
  65 |         console.log("destination:", hotelData.Destination)
  66 |         console.log("checkin:", hotelData.Checkin)
  67 |         console.log("Number of nights:", hotelData.numberofnights)
  68 |         console.log("Adults:", hotelData.Adults)
  69 |         //get Children
  70 |         console.log("Children:", hotelData.Children)
  71 |         const childData=hotelData.Children.split('-')
  72 |         //number of childeren
  73 |         const children=childData[0];
  74 |         //children ages
  75 |         const childAges=childData[1].split(',')
  76 |         console.log("Children:", children)
  77 |         for(let i of childAges){
  78 |             console.log("child",i,"age is:",childAges[i])
  79 |         }
  80 |         console.log("Citizenship:", hotelData.Citizenship)
  81 | 
  82 | 
  83 |     }
  84 | 
  85 | }
```