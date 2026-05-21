# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: bookingStatusPage.spec.js >> Booking flow >> Valid booking hotel
- Location: tests/bookingStatusPage.spec.js:9:1

# Error details

```
TypeError: this.children_count.textContent(...).scrollIntoViewIfNeeded is not a function
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
        - button "A Admin expand_more" [ref=e24] [cursor=pointer]:
          - generic [ref=e25]: A
          - generic [ref=e26]: Admin
          - generic [ref=e27]: expand_more
  - main [ref=e28]:
    - generic [ref=e29]:
      - img "Pristine tropical white sand beach with turquoise water" [ref=e32]
      - generic [ref=e33]:
        - heading "Find Your Perfect Escape" [level=2] [ref=e34]
        - paragraph [ref=e35]: UK's trusted travel experts with full financial protection.
        - generic [ref=e37]:
          - generic [ref=e38]:
            - generic [ref=e39]: Destination
            - generic [ref=e40]:
              - generic [ref=e41]: location_on
              - textbox "Where are you going?" [ref=e42]: Paris
          - generic [ref=e43]:
            - generic [ref=e44]: Check-in
            - generic [ref=e45]:
              - generic [ref=e46]: calendar_today
              - textbox [ref=e47]: 2026-07-02
          - generic [ref=e48]:
            - generic [ref=e49]: Check-out
            - generic [ref=e50]:
              - generic [ref=e51]: calendar_today
              - textbox [ref=e52]: 2026-07-07
          - generic [ref=e53]:
            - generic [ref=e54]: Guests
            - generic [ref=e55]:
              - generic [ref=e56]: person
              - button "2Ad, 1 Ro" [active] [ref=e57] [cursor=pointer]
              - generic [ref=e58]:
                - generic [ref=e59]:
                  - generic [ref=e60]: Rooms
                  - generic [ref=e61]:
                    - button "remove" [disabled] [ref=e62] [cursor=pointer]:
                      - generic [ref=e63]: remove
                    - generic [ref=e64]: "1"
                    - button "add" [ref=e65] [cursor=pointer]:
                      - generic [ref=e66]: add
                - generic [ref=e67]:
                  - paragraph [ref=e68]: Room 1
                  - generic [ref=e69]:
                    - generic [ref=e70]: Adults
                    - generic [ref=e71]:
                      - button "remove" [ref=e72] [cursor=pointer]:
                        - generic [ref=e73]: remove
                      - generic [ref=e74]: "2"
                      - button "add" [ref=e75] [cursor=pointer]:
                        - generic [ref=e76]: add
                  - generic [ref=e77]:
                    - generic [ref=e78]: Children
                    - generic [ref=e79]:
                      - button "remove" [disabled] [ref=e80] [cursor=pointer]:
                        - generic [ref=e81]: remove
                      - generic [ref=e82]: "0"
                      - button "add" [ref=e83] [cursor=pointer]:
                        - generic [ref=e84]: add
                - button "Apply" [ref=e85] [cursor=pointer]
          - generic [ref=e86]:
            - generic [ref=e87]: Citizenship
            - generic [ref=e88]:
              - generic [ref=e89]: flag
              - combobox [ref=e90] [cursor=pointer]:
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
          - button "search" [ref=e91] [cursor=pointer]:
            - generic [ref=e92]: search
    - generic [ref=e94]:
      - generic [ref=e95]:
        - generic [ref=e97]: verified_user
        - heading "Fully Protected" [level=3] [ref=e98]
        - paragraph [ref=e99]: Your money is 100% safe
      - generic [ref=e100]:
        - generic [ref=e102]: headset_mic
        - heading "24/7 Support" [level=3] [ref=e103]
        - paragraph [ref=e104]: Always here to help you
      - generic [ref=e105]:
        - generic [ref=e107]: star
        - heading "Expert Advice" [level=3] [ref=e108]
        - paragraph [ref=e109]: Personal travel specialists
      - generic [ref=e110]:
        - generic [ref=e112]: payments
        - heading "Best Price Promise" [level=3] [ref=e113]
        - paragraph [ref=e114]: Unbeatable value guaranteed
    - generic [ref=e115]:
      - generic [ref=e116]:
        - generic [ref=e117]:
          - heading "Featured Deals" [level=2] [ref=e118]
          - paragraph [ref=e119]: Hand-picked luxury holidays at exclusive prices.
        - generic [ref=e120]:
          - generic [ref=e121]:
            - button "chevron_left" [disabled] [ref=e122]:
              - generic [ref=e123]: chevron_left
            - button "chevron_right" [ref=e124] [cursor=pointer]:
              - generic [ref=e125]: chevron_right
          - link "View all deals arrow_forward" [ref=e126] [cursor=pointer]:
            - /url: /deals
            - text: View all deals
            - generic [ref=e127]: arrow_forward
      - generic [ref=e128]:
        - generic [ref=e130] [cursor=pointer]:
          - generic [ref=e131]:
            - img "Novotel Venezia Mestre Castellana" [ref=e132]
            - generic [ref=e133]: Limited Availability
          - generic [ref=e134]:
            - heading "Novotel Venezia Mestre Castellana" [level=3] [ref=e135]
            - generic [ref=e136]:
              - generic [ref=e137]:
                - generic [ref=e138]: star
                - generic [ref=e139]: star
                - generic [ref=e140]: star
                - generic [ref=e141]: star
              - generic [ref=e142]: "4.0"
            - generic [ref=e143]:
              - generic [ref=e144]: location_on
              - generic [ref=e145]: Venice, Italy
            - generic [ref=e146]:
              - generic [ref=e147]: flight_takeoff
              - generic [ref=e148]:
                - generic [ref=e149]: Fri, 17 Apr 2026
                - generic [ref=e150]: from Luton
            - generic [ref=e151]:
              - generic [ref=e152]:
                - generic [ref=e153]: dark_mode
                - text: 4 Nights
              - generic [ref=e154]:
                - generic [ref=e155]: restaurant
                - text: Bed & Breakfast
              - generic [ref=e156]:
                - generic [ref=e157]: flight
                - text: Flights
              - generic [ref=e158]:
                - generic [ref=e159]: luggage
                - text: Luggage
              - generic [ref=e160]:
                - generic [ref=e161]: airport_shuttle
                - text: Transfers
            - generic [ref=e162]:
              - generic [ref=e163]:
                - paragraph [ref=e164]: from
                - paragraph [ref=e165]: £495pp
              - generic [ref=e166]:
                - text: View deal
                - generic [ref=e167]: arrow_forward
        - generic [ref=e169] [cursor=pointer]:
          - generic [ref=e172]: image
          - generic [ref=e173]:
            - heading "Maldives Resort" [level=3] [ref=e174]
            - generic [ref=e175]:
              - generic [ref=e176]: location_on
              - generic [ref=e177]: Maldives
            - paragraph [ref=e178]: Very nice location next to the sea
            - generic [ref=e180]:
              - text: View deal
              - generic [ref=e181]: arrow_forward
        - generic [ref=e183] [cursor=pointer]:
          - generic [ref=e186]: image
          - generic [ref=e187]:
            - heading "Maldives Resort" [level=3] [ref=e188]
            - generic [ref=e189]:
              - generic [ref=e190]: location_on
              - generic [ref=e191]: Maldives
            - paragraph [ref=e192]: Very nice location next to the sea
            - generic [ref=e194]:
              - text: View deal
              - generic [ref=e195]: arrow_forward
        - generic [ref=e197] [cursor=pointer]:
          - generic [ref=e198]:
            - img "Sofia Hotel" [ref=e199]
            - generic [ref=e200]: save 400pp
          - generic [ref=e201]:
            - heading "Sofia Hotel" [level=3] [ref=e202]
            - generic [ref=e203]:
              - generic [ref=e204]:
                - generic [ref=e205]: star
                - generic [ref=e206]: star
                - generic [ref=e207]: star
              - generic [ref=e208]: "3.0"
            - generic [ref=e209]:
              - generic [ref=e210]: location_on
              - generic [ref=e211]: Crete, Greecehjkb
            - generic [ref=e212]:
              - generic [ref=e213]: flight_takeoff
              - generic [ref=e215]: from Manchester
            - generic [ref=e216]:
              - generic [ref=e217]:
                - generic [ref=e218]: dark_mode
                - text: 4 Nights
              - generic [ref=e219]:
                - generic [ref=e220]: restaurant
                - text: All Inclusive
              - generic [ref=e221]:
                - generic [ref=e222]: flight
                - text: Flights
              - generic [ref=e223]:
                - generic [ref=e224]: luggage
                - text: Luggage
            - generic [ref=e225]:
              - generic [ref=e226]:
                - paragraph [ref=e227]: from
                - paragraph [ref=e228]: £443pp
              - generic [ref=e229]:
                - text: View deal
                - generic [ref=e230]: arrow_forward
        - generic [ref=e232] [cursor=pointer]:
          - generic [ref=e233]:
            - img "Bellagio Beach Resort & Spa" [ref=e234]
            - generic [ref=e235]: Limited Offer
          - generic [ref=e236]:
            - heading "Bellagio Beach Resort & Spa" [level=3] [ref=e237]
            - generic [ref=e238]:
              - generic [ref=e239]:
                - generic [ref=e240]: star
                - generic [ref=e241]: star
                - generic [ref=e242]: star
                - generic [ref=e243]: star
                - generic [ref=e244]: star
              - generic [ref=e245]: "5.0"
            - generic [ref=e246]:
              - generic [ref=e247]: location_on
              - generic [ref=e248]: Hurghada, Egypt
            - paragraph [ref=e249]: "- Access to private beach -5 Outdoor pools with 2 heated pools - All-Inclusive - 5 Restaurants and 3 bars"
            - generic [ref=e250]:
              - generic [ref=e251]: flight_takeoff
              - generic [ref=e252]:
                - generic [ref=e253]: Sun, 19 Jul 2026
                - generic [ref=e254]: from Stansted
            - generic [ref=e255]:
              - generic [ref=e256]:
                - generic [ref=e257]: dark_mode
                - text: 7 Nights
              - generic [ref=e258]:
                - generic [ref=e259]: restaurant
                - text: All Inclusive
              - generic [ref=e260]:
                - generic [ref=e261]: flight
                - text: Flights
              - generic [ref=e262]:
                - generic [ref=e263]: luggage
                - text: Luggage
              - generic [ref=e264]:
                - generic [ref=e265]: airport_shuttle
                - text: Transfers
            - generic [ref=e266]:
              - generic [ref=e267]:
                - paragraph [ref=e268]: from
                - paragraph [ref=e269]: £1,090pp
              - generic [ref=e270]:
                - text: View deal
                - generic [ref=e271]: arrow_forward
        - generic [ref=e273] [cursor=pointer]:
          - generic [ref=e274]:
            - generic [ref=e276]: image
            - generic [ref=e277]: Limited availability
          - generic [ref=e278]:
            - heading "Maldives Resort" [level=3] [ref=e279]
            - generic [ref=e280]:
              - generic [ref=e281]:
                - generic [ref=e282]: star
                - generic [ref=e283]: star
                - generic [ref=e284]: star
                - generic [ref=e285]: star
              - generic [ref=e286]: "4.0"
            - generic [ref=e287]:
              - generic [ref=e288]: location_on
              - generic [ref=e289]: Maldives
            - paragraph [ref=e290]: Very nice location next to the sea
            - generic [ref=e291]:
              - generic [ref=e292]: flight_takeoff
              - generic [ref=e293]:
                - generic [ref=e294]: Sat, 26 Dec 2026
                - generic [ref=e295]: from Luton
            - generic [ref=e296]:
              - generic [ref=e297]:
                - generic [ref=e298]: dark_mode
                - text: 4 Nights
              - generic [ref=e299]:
                - generic [ref=e300]: restaurant
                - text: Half Board
            - generic [ref=e301]:
              - generic [ref=e302]:
                - paragraph [ref=e303]: from
                - paragraph [ref=e304]: £906pp
              - generic [ref=e305]:
                - text: View deal
                - generic [ref=e306]: arrow_forward
        - generic [ref=e308] [cursor=pointer]:
          - generic [ref=e309]:
            - generic [ref=e311]: image
            - generic [ref=e312]: Limited availability
          - generic [ref=e313]:
            - heading "almara Maldives Resort" [level=3] [ref=e314]
            - generic [ref=e315]:
              - generic [ref=e316]:
                - generic [ref=e317]: star
                - generic [ref=e318]: star
                - generic [ref=e319]: star
                - generic [ref=e320]: star
              - generic [ref=e321]: "4.0"
            - generic [ref=e322]:
              - generic [ref=e323]: location_on
              - generic [ref=e324]: Maldives
            - paragraph [ref=e325]: Very nice location next to the sea
            - generic [ref=e326]:
              - generic [ref=e327]: flight_takeoff
              - generic [ref=e328]:
                - generic [ref=e329]: Sat, 26 Dec 2026
                - generic [ref=e330]: from Luton
            - generic [ref=e331]:
              - generic [ref=e332]:
                - generic [ref=e333]: dark_mode
                - text: 4 Nights
              - generic [ref=e334]:
                - generic [ref=e335]: restaurant
                - text: Half Board
            - generic [ref=e336]:
              - generic [ref=e337]:
                - paragraph [ref=e338]: from
                - paragraph [ref=e339]: £906pp
              - generic [ref=e340]:
                - text: View deal
                - generic [ref=e341]: arrow_forward
        - generic [ref=e343] [cursor=pointer]:
          - generic [ref=e344]:
            - generic [ref=e346]: image
            - generic [ref=e347]: Limited availability
          - generic [ref=e348]:
            - heading "almara Maldives Resort" [level=3] [ref=e349]
            - generic [ref=e350]:
              - generic [ref=e351]:
                - generic [ref=e352]: star
                - generic [ref=e353]: star
                - generic [ref=e354]: star
                - generic [ref=e355]: star
              - generic [ref=e356]: "4.0"
            - generic [ref=e357]:
              - generic [ref=e358]: location_on
              - generic [ref=e359]: Maldives
            - paragraph [ref=e360]: Very nice location next to the sea
            - generic [ref=e361]:
              - generic [ref=e362]: flight_takeoff
              - generic [ref=e363]:
                - generic [ref=e364]: Sat, 26 Dec 2026
                - generic [ref=e365]: from Luton
            - generic [ref=e366]:
              - generic [ref=e367]:
                - generic [ref=e368]: dark_mode
                - text: 4 Nights
              - generic [ref=e369]:
                - generic [ref=e370]: restaurant
                - text: Half Board
            - generic [ref=e371]:
              - generic [ref=e372]:
                - paragraph [ref=e373]: from
                - paragraph [ref=e374]: £906pp
              - generic [ref=e375]:
                - text: View deal
                - generic [ref=e376]: arrow_forward
        - generic [ref=e378] [cursor=pointer]:
          - generic [ref=e379]:
            - generic [ref=e381]: image
            - generic [ref=e382]: Limited availability
          - generic [ref=e383]:
            - heading "almara Maldives Resort" [level=3] [ref=e384]
            - generic [ref=e385]:
              - generic [ref=e386]:
                - generic [ref=e387]: star
                - generic [ref=e388]: star
                - generic [ref=e389]: star
                - generic [ref=e390]: star
              - generic [ref=e391]: "4.0"
            - generic [ref=e392]:
              - generic [ref=e393]: location_on
              - generic [ref=e394]: Maldives
            - paragraph [ref=e395]: Very nice location next to the sea
            - generic [ref=e396]:
              - generic [ref=e397]: flight_takeoff
              - generic [ref=e398]:
                - generic [ref=e399]: Sat, 26 Dec 2026
                - generic [ref=e400]: from Luton
            - generic [ref=e401]:
              - generic [ref=e402]:
                - generic [ref=e403]: dark_mode
                - text: 4 Nights
              - generic [ref=e404]:
                - generic [ref=e405]: restaurant
                - text: Half Board
            - generic [ref=e406]:
              - generic [ref=e407]:
                - paragraph [ref=e408]: from
                - paragraph [ref=e409]: £906pp
              - generic [ref=e410]:
                - text: View deal
                - generic [ref=e411]: arrow_forward
        - generic [ref=e413] [cursor=pointer]:
          - generic [ref=e414]:
            - generic [ref=e416]: image
            - generic [ref=e417]: Limited availability
          - generic [ref=e418]:
            - heading "almara Maldives Resort" [level=3] [ref=e419]
            - generic [ref=e420]:
              - generic [ref=e421]:
                - generic [ref=e422]: star
                - generic [ref=e423]: star
                - generic [ref=e424]: star
                - generic [ref=e425]: star
              - generic [ref=e426]: "4.0"
            - generic [ref=e427]:
              - generic [ref=e428]: location_on
              - generic [ref=e429]: Maldives
            - paragraph [ref=e430]: Very nice location next to the sea
            - generic [ref=e431]:
              - generic [ref=e432]: flight_takeoff
              - generic [ref=e433]:
                - generic [ref=e434]: Sat, 26 Dec 2026
                - generic [ref=e435]: from Luton
            - generic [ref=e436]:
              - generic [ref=e437]:
                - generic [ref=e438]: dark_mode
                - text: 4 Nights
              - generic [ref=e439]:
                - generic [ref=e440]: restaurant
                - text: Half Board
            - generic [ref=e441]:
              - generic [ref=e442]:
                - paragraph [ref=e443]: from
                - paragraph [ref=e444]: £906pp
              - generic [ref=e445]:
                - text: View deal
                - generic [ref=e446]: arrow_forward
    - generic [ref=e448]:
      - heading "Trending Destinations" [level=2] [ref=e449]
      - generic [ref=e450]:
        - generic [ref=e451]:
          - img "Traditional Japanese temple with blossoms" [ref=e452]
          - generic [ref=e454]:
            - heading "Japan" [level=4] [ref=e455]
            - paragraph [ref=e456]: Authentic Culture
        - generic [ref=e457]:
          - img "Sunset over African Savannah with wildlife" [ref=e458]
          - generic [ref=e460]:
            - heading "Kenya" [level=4] [ref=e461]
            - paragraph [ref=e462]: Safari Adventures
        - generic [ref=e463]:
          - img "Iceland northern lights over waterfall" [ref=e464]
          - generic [ref=e466]:
            - heading "Iceland" [level=4] [ref=e467]
            - paragraph [ref=e468]: Natural Wonders
        - generic [ref=e469]:
          - img "Sydney Opera House at dusk" [ref=e470]
          - generic [ref=e472]:
            - heading "Australia" [level=4] [ref=e473]
            - paragraph [ref=e474]: Coastal Living
    - generic [ref=e475]:
      - generic [ref=e476]:
        - heading "What Our Customers Say" [level=2] [ref=e477]
        - link "Google star star star star star 5 (6 reviews)" [ref=e478] [cursor=pointer]:
          - /url: https://www.google.com/search?kgmid=/g/11ymly9hnl#lrd=0x0:0xc3e974eebe978de6,1,,,
          - img "Google" [ref=e479]
          - generic [ref=e480]:
            - generic [ref=e481]: star
            - generic [ref=e482]: star
            - generic [ref=e483]: star
            - generic [ref=e484]: star
            - generic [ref=e485]: star
          - generic [ref=e486]: "5"
          - generic [ref=e487]: (6 reviews)
      - generic [ref=e488]:
        - generic [ref=e489]:
          - generic [ref=e490]:
            - generic [ref=e491]:
              - generic [ref=e492]: star
              - generic [ref=e493]: star
              - generic [ref=e494]: star
              - generic [ref=e495]: star
              - generic [ref=e496]: star
            - img "Google" [ref=e497]
          - paragraph [ref=e498]: Sandhya has helped us in planning our holiday to Paris. The hotel was in a perfect location and had a very good stay. We took a Eurostar from London to Paris and I would definitely recommend specially if you have young kids. Thanks again for Sandhya for organising a wonderful trip. Highly recommend Sandlight Travels.
          - generic [ref=e499]:
            - generic [ref=e500]: AA
            - generic [ref=e501]:
              - paragraph [ref=e502]: Ashwin Arroju
              - paragraph [ref=e503]: a week ago
        - generic [ref=e504]:
          - generic [ref=e505]:
            - generic [ref=e506]:
              - generic [ref=e507]: star
              - generic [ref=e508]: star
              - generic [ref=e509]: star
              - generic [ref=e510]: star
              - generic [ref=e511]: star
            - img "Google" [ref=e512]
          - paragraph [ref=e513]: Excellent communications throughout and a extremely competitive price for a 5 star holiday - thanks and we will definitely travel through SL again.
          - generic [ref=e514]:
            - generic [ref=e515]: AP
            - generic [ref=e516]:
              - paragraph [ref=e517]: Amrish Patel
              - paragraph [ref=e518]: a month ago
        - generic [ref=e519]:
          - generic [ref=e520]:
            - generic [ref=e521]:
              - generic [ref=e522]: star
              - generic [ref=e523]: star
              - generic [ref=e524]: star
              - generic [ref=e525]: star
              - generic [ref=e526]: star
            - img "Google" [ref=e527]
          - paragraph [ref=e528]: Excellent service from the travel agency that helped us plan our trip to Antalya, Turkey. Their response was really amazing, very quick, and supportive throughout. Highly recommended if you need any travel assistance!
          - generic [ref=e529]:
            - generic [ref=e530]: HG
            - generic [ref=e531]:
              - paragraph [ref=e532]: Harish Gunda
              - paragraph [ref=e533]: 2 months ago
      - link "See all Google reviews open_in_new" [ref=e535] [cursor=pointer]:
        - /url: https://www.google.com/search?kgmid=/g/11ymly9hnl#lrd=0x0:0xc3e974eebe978de6,1,,,
        - text: See all Google reviews
        - generic [ref=e536]: open_in_new
    - generic [ref=e538]:
      - generic [ref=e540]: mail
      - generic [ref=e541]:
        - heading "Stay in the Loop" [level=2] [ref=e542]
        - paragraph [ref=e543]: Join 50,000+ travel lovers and get exclusive secret deals delivered to your inbox every week.
        - generic [ref=e544]:
          - generic [ref=e545]:
            - textbox "Your email address" [ref=e546]
            - button "Subscribe" [ref=e547] [cursor=pointer]
          - paragraph [ref=e548]: We respect your privacy. Unsubscribe at any time.
  - contentinfo [ref=e549]:
    - generic [ref=e550]:
      - generic [ref=e551]:
        - generic [ref=e552]:
          - generic [ref=e553]:
            - img "Sandlight Travels" [ref=e554]
            - heading "Sandlight Travels" [level=2] [ref=e555]
          - paragraph [ref=e556]: Leading UK independent travel agency. We combine expert knowledge with unbeatable service to create your perfect getaway.
          - list [ref=e557]:
            - listitem [ref=e558]:
              - generic [ref=e559]: call
              - link "0800 031 5285" [ref=e560] [cursor=pointer]:
                - /url: tel:08000315285
            - listitem [ref=e561]:
              - generic [ref=e562]: mail
              - link "info@sandlighttravels.co.uk" [ref=e563] [cursor=pointer]:
                - /url: mailto:info@sandlighttravels.co.uk
            - listitem [ref=e564]:
              - img [ref=e565]
              - link "WhatsApp Us" [ref=e567] [cursor=pointer]:
                - /url: https://wa.me/447425910458?text=Good%20day%2C%20I%20am%20writing%20to%20enquire%20about%20a%20holiday%20package.
          - generic [ref=e568]:
            - link [ref=e569] [cursor=pointer]:
              - /url: https://www.facebook.com/sandlighttravels
              - img [ref=e570]
            - link [ref=e572] [cursor=pointer]:
              - /url: https://www.instagram.com/sandlighttravels
              - img [ref=e573]
            - link [ref=e575] [cursor=pointer]:
              - /url: https://www.linkedin.com/company/sandlighttravels
              - img [ref=e576]
        - generic [ref=e578]:
          - heading "Quick Links" [level=4] [ref=e579]
          - list [ref=e580]:
            - listitem [ref=e581]:
              - link "About Us" [ref=e582] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e583]:
              - link "Contact Us" [ref=e584] [cursor=pointer]:
                - /url: /contact
            - listitem [ref=e585]:
              - link "Transfers" [ref=e586] [cursor=pointer]:
                - /url: /experiences/transfers
            - listitem [ref=e587]:
              - link "Airport Lounges" [ref=e588] [cursor=pointer]:
                - /url: /experiences/lounges
            - listitem [ref=e589]:
              - link "Tours & Activities" [ref=e590] [cursor=pointer]:
                - /url: /experiences/get-your-guide
            - listitem [ref=e591]:
              - link "Travel Insurance" [ref=e592] [cursor=pointer]:
                - /url: /experiences/travel-insurance
        - generic [ref=e593]:
          - heading "Support" [level=4] [ref=e594]
          - list [ref=e595]:
            - listitem [ref=e596]:
              - link "Manage Booking" [ref=e597] [cursor=pointer]:
                - /url: /account/bookings
            - listitem [ref=e598]:
              - link "Financial Protection" [ref=e599] [cursor=pointer]:
                - /url: /protection
            - listitem [ref=e600]:
              - link "Terms & Conditions" [ref=e601] [cursor=pointer]:
                - /url: /terms
            - listitem [ref=e602]:
              - link "Privacy Policy" [ref=e603] [cursor=pointer]:
                - /url: /privacy
            - listitem [ref=e604]:
              - link "Cookie Policy" [ref=e605] [cursor=pointer]:
                - /url: /cookies
        - generic [ref=e606]:
          - heading "Our Partners" [level=4] [ref=e607]
          - generic [ref=e608]:
            - generic [ref=e609]: easyJet
            - generic [ref=e610]: TUI
            - generic [ref=e611]: Jet2
            - generic [ref=e612]: P&O Cruises
            - generic [ref=e613]: MSC Cruises
            - generic [ref=e614]: RCI
          - paragraph [ref=e615]: Partnered with the UK's leading travel operators to bring you the best deals.
      - generic [ref=e616]:
        - paragraph [ref=e617]: © 2026 Sandlight Travels. All rights reserved.
        - generic [ref=e618]:
          - img "Visa logo" [ref=e619]
          - img "Mastercard logo" [ref=e620]
  - link [ref=e621] [cursor=pointer]:
    - /url: https://wa.me/447425910458?text=Good%20day%2C%20I%20am%20writing%20to%20enquire%20about%20a%20holiday%20package.
    - img [ref=e622]
  - alert [ref=e624]
```

# Test source

```ts
  26  |         this.child_plus_btn=page.locator("#btn-room-0-children-plus")
  27  |         this.parentDivChildAges=(id)=>page.locator(`//div[@class='mt-2 space-y-1']/div/select[@id='select-room-0-child-${id}-age']`)
  28  |         this.applyBtn=page.locator("#btn-guests-apply")
  29  |         this.citizen_select=page.locator("#select-citizenship")
  30  |         this.searchBtn=page.locator("#btn-search")
  31  | 
  32  | 
  33  | 
  34  |     }
  35  |     async clickOnLogin(){
  36  |         await this.loginBtn.click()
  37  |     }
  38  |     async goToAdminPanel(){
  39  |         await this.expandBtn.click()
  40  |         await this.adminPanelBtn.click()
  41  | 
  42  |     }
  43  |     async verifyUserBtn(){
  44  |         await expect(this.userNameBtn).toBeVisible()
  45  |     }
  46  |     async waitForStatusToDisappear()
  47  |     {
  48  |         await expect(this.statusMessage).toBeHidden();
  49  |     }
  50  |     async verifyAdminPanel(){
  51  |         console.log(await this.username.textContent())
  52  |         await expect(this.username).toContainText("Admin")
  53  |     }
  54  |     async enterHotelDetails(hotelData){
  55  | 
  56  |         //this.getExcelData(hotelData)
  57  |         // await this.destination.fill("paris")
  58  |         // await this.page.waitForTimeout(4000)
  59  |         // await this.selectDestination.first().click();
  60  |         // await this.checkin.click()
  61  |         
  62  |         //get the search details from excelfile
  63  |         //enter destination
  64  |         console.log("destination:", hotelData.Destination)
  65  |         await this.destination.fill(hotelData.Destination)
  66  |         await this.page.waitForTimeout(4000)
  67  |         await this.selectDestination.first().click();
  68  |         //enter check in date
  69  |         console.log("checkin:", hotelData.Checkin)
  70  |         await this.checkin.click()
  71  |         await this.checkin.fill(hotelData.Checkin)
  72  | 
  73  |         const dateArray=hotelData.Checkin.split('-');
  74  |         const day=dateArray[2]
  75  |         const month=dateArray[1]
  76  |         const year=dateArray[0]
  77  |         console.log("day:", day)
  78  |         console.log("month:", month)
  79  |         console.log("year:", year)
  80  |       //  await this.page.pause();
  81  |         //thraverse through shadow root to select the date from calendar
  82  |         await this.checkin.scrollIntoViewIfNeeded()
  83  |         const startdate=year+'/'+month+'/'+day;
  84  |        // await this.checkin.click()
  85  |       //  await this.checkin.fill(startdate);
  86  |         console.log(startdate);
  87  |         //set checkout with number of nights from start date
  88  |         const endday=parseInt(day)+parseInt(hotelData.numberofnights);
  89  |         const endDate=`${year}-${month}-${String(endday).padStart(2,'0')}`
  90  | 
  91  |         //const endDate=year+'-'+month+'-'+endday;
  92  |         console.log("end date:",endDate)
  93  |         console.log("Number of nights:", hotelData.numberofnights)
  94  |         await this.checkout.click()
  95  |         await this.checkout.fill(endDate)
  96  |         //enter number of adults
  97  |         console.log("Adults:", hotelData.Adults)
  98  | 
  99  |         await this.guests.click()
  100 |         const adultsDisplayed=await this.adults_count.textContent()
  101 |         if(adultsDisplayed==hotelData.Adults){
  102 |             console.log("adults correct and skip to children")
  103 |         }
  104 |         else if(adultsDisplayed<hotelData.Adults)
  105 |         {
  106 |             while(await this.adults_count.textContent()<hotelData.Adults)
  107 |             {
  108 |                 await this.adult_plus_btn.click()
  109 |             }
  110 |         }
  111 |         else if(adultsDisplayed>hotelData.Adults)
  112 |         {
  113 |             while(await this.adults_count.textContent()>hotelData.Adults)
  114 |             {
  115 |                 await this.adult_minus_btn.click()
  116 |             }
  117 |         }
  118 | 
  119 |         //get Children
  120 |         console.log("Children:", hotelData.Children)
  121 |         const childData=hotelData.Children.split('-')
  122 |         //number of children
  123 |         const children=childData[0];
  124 |         //children ages
  125 |         const childAges=childData[1].split(',')
> 126 |         const childrenText=await this.children_count.textContent().scrollIntoViewIfNeeded()
      |                                                                    ^ TypeError: this.children_count.textContent(...).scrollIntoViewIfNeeded is not a function
  127 |         console.log("children displayed:", childrenText)
  128 |         console.log("Children:", children)
  129 |         for(let i=0;i<childAges.length;i++)
  130 |         {
  131 |             
  132 |             console.log("child",childAges[i])
  133 |         }
  134 |         if(childrenText==children){
  135 |             console.log("children displayed correct")
  136 |         }
  137 |         else if(childrenText<children)
  138 |         {
  139 |             while(childrenText<=children)
  140 |             {
  141 |                 await this.child_plus_btn.click()
  142 |             }
  143 |         }
  144 |          for(let i=0;i<childAges.length;i++)
  145 |         {
  146 |             await this.parentDivChildAges(i).selectOption(childAges[i])
  147 |         }
  148 |         await this.page.waitForTimeout(3000)
  149 |         await this.applyBtn.click()
  150 |         await this.page.waitForTimeout(3000)
  151 |         // for(let i of childAges){
  152 |         //     console.log("child",i)
  153 |         // }
  154 |         console.log("Citizenship:", hotelData.Citizenship)
  155 |         await this.citizen_select.selectOption({label: hotelData.Citizenship})
  156 | 
  157 | 
  158 | 
  159 |     }
  160 |     async getExcelData(hotelData){
  161 |         console.log("destination:", hotelData.Destination)
  162 |         console.log("checkin:", hotelData.Checkin)
  163 |         const dateArray=hotelData.Checkin.split('/');
  164 |         const day=dateArray[0]
  165 |         const month=dateArray[1]
  166 |         const year=dateArray[2]
  167 |         console.log("day:", day)
  168 |         console.log("month:", month)
  169 |         console.log("year:", year)
  170 |         console.log("Number of nights:", hotelData.numberofnights)
  171 |         console.log("Adults:", hotelData.Adults)
  172 |         //get Children
  173 |         console.log("Children:", hotelData.Children)
  174 |         const childData=hotelData.Children.split('-')
  175 |         //number of childeren
  176 |         const children=childData[0];
  177 |         //children ages
  178 |         const childAges=childData[1].split(',')
  179 |         console.log("Children:", children)
  180 |         for(let i=0;i<childAges.length;i++)
  181 |         {
  182 |             console.log("child",childAges[i])
  183 |         }
  184 |         // for(let i of childAges){
  185 |         //     console.log("child",i)
  186 |         // }
  187 |         console.log("Citizenship:", hotelData.Citizenship)
  188 | 
  189 | 
  190 |     }
  191 | 
  192 | }
```