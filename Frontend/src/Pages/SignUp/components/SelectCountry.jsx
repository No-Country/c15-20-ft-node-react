export default function SelectCountry({ country, onChange, extraStyles = "" }) {
  const selectCountry = (event) => {
    const country = event.target.value;
    console.log(country);
    onChange(country);
  };
  return (
    <select
      id='usercountry'
      name='usercountry'
      className={`mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500  ${extraStyles}}`}
      value={country}
      onChange={selectCountry}
      required
    >
      <option hidden>...</option>
      <option value='Afghanistan'>Afganistán</option>
      <option value='Aland Islands'>Islas Aland</option>
      <option value='Albania'>Albania</option>
      <option value='Algeria'>Argelia</option>
      <option value='American Samoa'>Samoa Americana</option>
      <option value='Andorra'>Andorra</option>
      <option value='Angola'>Angola</option>
      <option value='Anguilla'>Anguila</option>
      <option value='Antarctica'>Antártida</option>
      <option value='Antigua and Barbuda'>Antigua y Barbuda</option>
      <option value='Argentina'>Argentina</option>
      <option value='Armenia'>Armenia</option>
      <option value='Aruba'>Aruba</option>
      <option value='Australia'>Australia</option>
      <option value='Austria'>Austria</option>
      <option value='Azerbaijan'>Azerbaiyán</option>
      <option value='Bahamas'>Bahamas</option>
      <option value='Bahrain'>Bahréin</option>
      <option value='Bangladesh'>Bangladesh</option>
      <option value='Barbados'>Barbados</option>
      <option value='Belarus'>Bielorrusia</option>
      <option value='Belgium'>Bélgica</option>
      <option value='Belize'>Belice</option>
      <option value='Benin'>Benin</option>
      <option value='Bermuda'>islas Bermudas</option>
      <option value='Bhutan'>Bután</option>
      <option value='Bolivia'>Bolivia</option>
      <option value='Bonaire, Sint Eustatius and Saba'>
        Bonaire, Sint Eustatius y Saba
      </option>
      <option value='Bosnia and Herzegovina'>Bosnia y Herzegovina</option>
      <option value='Botswana'>Botswana</option>
      <option value='Bouvet Island'>Isla Bouvet</option>
      <option value='Brazil'>Brasil</option>
      <option value='British Indian Ocean Territory'>
        Territorio Británico del Océano Índico
      </option>
      <option value='Brunei Darussalam'>Brunei Darussalam</option>
      <option value='Bulgaria'>Bulgaria</option>
      <option value='Burkina Faso'>Burkina Faso</option>
      <option value='Burundi'>Burundi</option>
      <option value='Cambodia'>Camboya</option>
      <option value='Cameroon'>Camerún</option>
      <option value='Canada'>Canadá</option>
      <option value='Cape Verde'>Cabo Verde</option>
      <option value='Cayman Islands'>Islas Caimán</option>
      <option value='Central African Republic'>República Centroafricana</option>
      <option value='Chad'>Chad</option>
      <option value='Chile'>Chile</option>
      <option value='China'>porcelana</option>
      <option value='Christmas Island'>Isla de Navidad</option>
      <option value='Cocos (Keeling) Islands'>Islas Cocos (Keeling)</option>
      <option value='Colombia'>Colombia</option>
      <option value='Comoros'>Comoras</option>
      <option value='Congo'>Congo</option>
      <option value='Congo, Democratic Republic of the Congo'>
        Congo, República Democrática del Congo
      </option>
      <option value='Cook Islands'>Islas Cook</option>
      <option value='Costa Rica'>Costa Rica</option>
      <option value="Cote D'Ivoire">Costa de Marfil</option>
      <option value='Croatia'>Croacia</option>
      <option value='Cuba'>Cuba</option>
      <option value='Curacao'>Curazao</option>
      <option value='Cyprus'>Chipre</option>
      <option value='Czech Republic'>Republica checa</option>
      <option value='Denmark'>Dinamarca</option>
      <option value='Djibouti'>Djibouti</option>
      <option value='Dominica'>Dominica</option>
      <option value='Dominican Republic'>República Dominicana</option>
      <option value='Ecuador'>Ecuador</option>
      <option value='Egypt'>Egipto</option>
      <option value='El Salvador'>El Salvador</option>
      <option value='Equatorial Guinea'>Guinea Ecuatorial</option>
      <option value='Eritrea'>Eritrea</option>
      <option value='Estonia'>Estonia</option>
      <option value='Ethiopia'>Etiopía</option>
      <option value='Falkland Islands (Malvinas)'>
        Islas Falkland (Malvinas)
      </option>
      <option value='Faroe Islands'>Islas Faroe</option>
      <option value='Fiji'>Fiyi</option>
      <option value='Finland'>Finlandia</option>
      <option value='France'>Francia</option>
      <option value='French Guiana'>Guayana Francesa</option>
      <option value='French Polynesia'>Polinesia francés</option>
      <option value='French Southern Territories'>
        Territorios Franceses del Sur
      </option>
      <option value='Gabon'>Gabón</option>
      <option value='Gambia'>Gambia</option>
      <option value='Georgia'>Georgia</option>
      <option value='Germany'>Alemania</option>
      <option value='Ghana'>Ghana</option>
      <option value='Gibraltar'>Gibraltar</option>
      <option value='Greece'>Grecia</option>
      <option value='Greenland'>Groenlandia</option>
      <option value='Grenada'>Granada</option>
      <option value='Guadeloupe'>Guadalupe</option>
      <option value='Guam'>Guam</option>
      <option value='Guatemala'>Guatemala</option>
      <option value='Guernsey'>Guernsey</option>
      <option value='Guinea'>Guinea</option>
      <option value='Guinea-Bissau'>Guinea-Bissau</option>
      <option value='Guyana'>Guayana</option>
      <option value='Haiti'>Haití</option>
      <option value='Heard Island and Mcdonald Islands'>
        Islas Heard y McDonald
      </option>
      <option value='Holy See (Vatican City State)'>
        Santa Sede (Estado de la Ciudad del Vaticano)
      </option>
      <option value='Honduras'>Honduras</option>
      <option value='Hong Kong'>Hong Kong</option>
      <option value='Hungary'>Hungría</option>
      <option value='Iceland'>Islandia</option>
      <option value='India'>India</option>
      <option value='Indonesia'>Indonesia</option>
      <option value='Iran, Islamic Republic of'>
        Irán (República Islámica de
      </option>
      <option value='Iraq'>Irak</option>
      <option value='Ireland'>Irlanda</option>
      <option value='Isle of Man'>Isla del hombre</option>
      <option value='Israel'>Israel</option>
      <option value='Italy'>Italia</option>
      <option value='Jamaica'>Jamaica</option>
      <option value='Japan'>Japón</option>
      <option value='Jersey'>Jersey</option>
      <option value='Jordan'>Jordán</option>
      <option value='Kazakhstan'>Kazajstán</option>
      <option value='Kenya'>Kenia</option>
      <option value='Kiribati'>Kiribati</option>
      <option value="Korea, Democratic People's Republic of">
        República de Corea, Popular Democrática de
      </option>
      <option value='Korea, Republic of'>Corea, república de</option>
      <option value='Kosovo'>Kosovo</option>
      <option value='Kuwait'>Kuwait</option>
      <option value='Kyrgyzstan'>Kirguistán</option>
      <option value="Lao People's Democratic Republic">
        República Democrática Popular Lao
      </option>
      <option value='Latvia'>Letonia</option>
      <option value='Lebanon'>Líbano</option>
      <option value='Lesotho'>Lesoto</option>
      <option value='Liberia'>Liberia</option>
      <option value='Libyan Arab Jamahiriya'>Jamahiriya Arabe Libia</option>
      <option value='Liechtenstein'>Liechtenstein</option>
      <option value='Lithuania'>Lituania</option>
      <option value='Luxembourg'>Luxemburgo</option>
      <option value='Macao'>Macao</option>
      <option value='Macedonia, the Former Yugoslav Republic of'>
        Macedonia, la ex República Yugoslava de
      </option>
      <option value='Madagascar'>Madagascar</option>
      <option value='Malawi'>Malawi</option>
      <option value='Malaysia'>Malasia</option>
      <option value='Maldives'>Maldivas</option>
      <option value='Mali'>Mali</option>
      <option value='Malta'>Malta</option>
      <option value='Marshall Islands'>Islas Marshall</option>
      <option value='Martinique'>Martinica</option>
      <option value='Mauritania'>Mauritania</option>
      <option value='Mauritius'>Mauricio</option>
      <option value='Mayotte'>Mayotte</option>
      <option value='Mexico'>México</option>
      <option value='Micronesia, Federated States of'>
        Micronesia, Estados Federados de
      </option>
      <option value='Moldova, Republic of'>Moldavia, República de</option>
      <option value='Monaco'>Mónaco</option>
      <option value='Mongolia'>Mongolia</option>
      <option value='Montenegro'>Montenegro</option>
      <option value='Montserrat'>Montserrat</option>
      <option value='Morocco'>Marruecos</option>
      <option value='Mozambique'>Mozambique</option>
      <option value='Myanmar'>Myanmar</option>
      <option value='Namibia'>Namibia</option>
      <option value='Nauru'>Nauru</option>
      <option value='Nepal'>Nepal</option>
      <option value='Netherlands'>Países Bajos</option>
      <option value='Netherlands Antilles'>Antillas Holandesas</option>
      <option value='New Caledonia'>Nueva Caledonia</option>
      <option value='New Zealand'>Nueva Zelanda</option>
      <option value='Nicaragua'>Nicaragua</option>
      <option value='Niger'>Níger</option>
      <option value='Nigeria'>Nigeria</option>
      <option value='Niue'>Niue</option>
      <option value='Norfolk Island'>Isla Norfolk</option>
      <option value='Northern Mariana Islands'>Islas Marianas del Norte</option>
      <option value='Norway'>Noruega</option>
      <option value='Oman'>Omán</option>
      <option value='Pakistan'>Pakistán</option>
      <option value='Palau'>Palau</option>
      <option value='Palestinian Territory, Occupied'>
        Territorio Palestino, Ocupado
      </option>
      <option value='Panama'>Panamá</option>
      <option value='Papua New Guinea'>Papúa Nueva Guinea</option>
      <option value='Paraguay'>Paraguay</option>
      <option value='Peru'>Perú</option>
      <option value='Philippines'>Filipinas</option>
      <option value='Pitcairn'>Pitcairn</option>
      <option value='Poland'>Polonia</option>
      <option value='Portugal'>Portugal</option>
      <option value='Puerto Rico'>Puerto Rico</option>
      <option value='Qatar'>Katar</option>
      <option value='Reunion'>Reunión</option>
      <option value='Romania'>Rumania</option>
      <option value='Russian Federation'>Federación Rusa</option>
      <option value='Rwanda'>Ruanda</option>
      <option value='Saint Barthelemy'>San Bartolomé</option>
      <option value='Saint Helena'>Santa elena</option>
      <option value='Saint Kitts and Nevis'>Saint Kitts y Nevis</option>
      <option value='Saint Lucia'>Santa Lucía</option>
      <option value='Saint Martin'>San Martín</option>
      <option value='Saint Pierre and Miquelon'>San Pedro y Miquelón</option>
      <option value='Saint Vincent and the Grenadines'>
        San Vicente y las Granadinas
      </option>
      <option value='Samoa'>Samoa</option>
      <option value='San Marino'>San Marino</option>
      <option value='Sao Tome and Principe'>Santo Tomé y Príncipe</option>
      <option value='Saudi Arabia'>Arabia Saudita</option>
      <option value='Senegal'>Senegal</option>
      <option value='Serbia'>Serbia</option>
      <option value='Serbia and Montenegro'>Serbia y Montenegro</option>
      <option value='Seychelles'>Seychelles</option>
      <option value='Sierra Leone'>Sierra Leona</option>
      <option value='Singapore'>Singapur</option>
      <option value='Sint Maarten'>San Martín</option>
      <option value='Slovakia'>Eslovaquia</option>
      <option value='Slovenia'>Eslovenia</option>
      <option value='Solomon Islands'>Islas Salomón</option>
      <option value='Somalia'>Somalia</option>
      <option value='South Africa'>Sudáfrica</option>
      <option value='South Georgia and the South Sandwich Islands'>
        Georgia del sur y las islas Sandwich del sur
      </option>
      <option value='South Sudan'>Sudán del Sur</option>
      <option value='Spain'>España</option>
      <option value='Sri Lanka'>Sri Lanka</option>
      <option value='Sudan'>Sudán</option>
      <option value='Suriname'>Surinam</option>
      <option value='Svalbard and Jan Mayen'>Svalbard y Jan Mayen</option>
      <option value='Swaziland'>Swazilandia</option>
      <option value='Sweden'>Suecia</option>
      <option value='Switzerland'>Suiza</option>
      <option value='Syrian Arab Republic'>República Árabe Siria</option>
      <option value='Taiwan, Province of China'>
        Taiwan, provincia de China
      </option>
      <option value='Tajikistan'>Tayikistán</option>
      <option value='Tanzania, United Republic of'>
        Tanzania, República Unida de
      </option>
      <option value='Thailand'>Tailandia</option>
      <option value='Timor-Leste'>Timor-Leste</option>
      <option value='Togo'>Para llevar</option>
      <option value='Tokelau'>Tokelau</option>
      <option value='Tonga'>Tonga</option>
      <option value='Trinidad and Tobago'>Trinidad y Tobago</option>
      <option value='Tunisia'>Túnez</option>
      <option value='Turkey'>pavo</option>
      <option value='Turkmenistan'>Turkmenistán</option>
      <option value='Turks and Caicos Islands'>Islas Turcas y Caicos</option>
      <option value='Tuvalu'>Tuvalu</option>
      <option value='Uganda'>Uganda</option>
      <option value='Ukraine'>Ucrania</option>
      <option value='United Arab Emirates'>Emiratos Árabes Unidos</option>
      <option value='United Kingdom'>Reino Unido</option>
      <option value='United States'>Estados Unidos</option>
      <option value='United States Minor Outlying Islands'>
        Islas menores alejadas de los Estados Unidos
      </option>
      <option value='Uruguay'>Uruguay</option>
      <option value='Uzbekistan'>Uzbekistan</option>
      <option value='Vanuatu'>Vanuatu</option>
      <option value='Venezuela'>Venezuela</option>
      <option value='Viet Nam'>Vietnam</option>
      <option value='Virgin Islands, British'>Islas Vírgenes Británicas</option>
      <option value='Virgin Islands, U.s.'>Islas Vírgenes, EE. UU.</option>
      <option value='Wallis and Futuna'>Wallis y Futuna</option>
      <option value='Western Sahara'>Sahara Occidental</option>
      <option value='Yemen'>Yemen</option>
      <option value='Zambia'>Zambia</option>
      <option value='Zimbabwe'>Zimbabue</option>
    </select>
  );
}
