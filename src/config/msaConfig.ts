// Types for MSA configuration
interface MSAConfig {
  city: string;
  state: string;
  counties: string[];
  surroundingCities: string[];
  msa_region: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  address: {
    street: string;
    zipCode: string;
  };
}

// MSA Configuration with addresses
export const MSA_CONFIG: Record<string, MSAConfig> = {
  "New York-Newark-Jersey City": {
    city: "New York",
    state: "NY",
    counties: ["New York", "Kings", "Bronx", "Queens", "Richmond"],
    surroundingCities: ["Newark", "Jersey City", "Yonkers", "Paterson", "Elizabeth"],
    msa_region: "NY Metro Area",
    coordinates: { latitude: "40.7128", longitude: "-74.0060" },
    address: { street: "60 Centre St", zipCode: "10007" }
  },
  "Los Angeles-Long Beach-Anaheim": {
    city: "Los Angeles",
    state: "CA",
    counties: ["Los Angeles", "Orange"],
    surroundingCities: ["Long Beach", "Anaheim", "Santa Ana", "Irvine", "Glendale"],
    msa_region: "Greater Los Angeles",
    coordinates: { latitude: "34.0522", longitude: "-118.2437" },
    address: { street: "111 N Hill St", zipCode: "90012" }
  },
  "Chicago-Naperville-Elgin": {
    city: "Chicago",
    state: "IL",
    counties: ["Cook", "DuPage", "Lake"],
    surroundingCities: ["Naperville", "Elgin", "Aurora", "Joliet", "Waukegan"],
    msa_region: "Chicagoland",
    coordinates: { latitude: "41.8781", longitude: "-87.6298" },
    address: { street: "50 W Washington St", zipCode: "60602" }
  },
  "Dallas-Fort Worth-Arlington": {
    city: "Dallas",
    state: "TX",
    counties: ["Dallas", "Tarrant", "Collin"],
    surroundingCities: ["Fort Worth", "Arlington", "Plano", "Irving", "Frisco"],
    msa_region: "DFW Metroplex",
    coordinates: { latitude: "32.7767", longitude: "-96.7970" },
    address: { street: "600 Commerce St", zipCode: "75202" }
  },
  "Houston-The Woodlands-Sugar Land": {
    city: "Houston",
    state: "TX",
    counties: ["Harris", "Fort Bend", "Montgomery"],
    surroundingCities: ["The Woodlands", "Sugar Land", "Katy", "Pearland", "Spring"],
    msa_region: "Greater Houston",
    coordinates: { latitude: "29.7604", longitude: "-95.3698" },
    address: { street: "201 Caroline St", zipCode: "77002" }
  },
  "Washington-Arlington-Alexandria": {
    city: "Washington",
    state: "DC",
    counties: ["District of Columbia", "Montgomery", "Prince George's"],
    surroundingCities: ["Arlington", "Alexandria", "Bethesda", "Silver Spring", "Rockville"],
    msa_region: "DC Metro Area",
    coordinates: { latitude: "38.9072", longitude: "-77.0369" },
    address: { street: "500 Indiana Ave NW", zipCode: "20001" }
  },
  "Miami-Fort Lauderdale-Pompano Beach": {
    city: "Miami",
    state: "FL",
    counties: ["Miami-Dade", "Broward", "Palm Beach"],
    surroundingCities: ["Fort Lauderdale", "Pompano Beach", "Hialeah", "Hollywood", "Boca Raton"],
    msa_region: "South Florida Metro",
    coordinates: { latitude: "25.7617", longitude: "-80.1918" },
    address: { street: "73 W Flagler St", zipCode: "33130" }
  },
  "Philadelphia-Camden-Wilmington": {
    city: "Philadelphia",
    state: "PA",
    counties: ["Philadelphia", "Montgomery", "Bucks"],
    surroundingCities: ["Camden", "Wilmington", "Chester", "Norristown", "King of Prussia"],
    msa_region: "Greater Philadelphia",
    coordinates: { latitude: "39.9526", longitude: "-75.1652" },
    address: { street: "1301 Filbert St", zipCode: "19107" }
  },
  "Atlanta-Sandy Springs-Alpharetta": {
    city: "Atlanta",
    state: "GA",
    counties: ["Fulton", "DeKalb", "Gwinnett"],
    surroundingCities: ["Sandy Springs", "Alpharetta", "Marietta", "Roswell", "Johns Creek"],
    msa_region: "Metro Atlanta",
    coordinates: { latitude: "33.7490", longitude: "-84.3880" },
    address: { street: "185 Central Ave SW", zipCode: "30303" }
  },
  "Boston-Cambridge-Newton": {
    city: "Boston",
    state: "MA",
    counties: ["Suffolk", "Middlesex", "Norfolk"],
    surroundingCities: ["Cambridge", "Newton", "Somerville", "Waltham", "Quincy"],
    msa_region: "Greater Boston",
    coordinates: { latitude: "42.3601", longitude: "-71.0589" },
    address: { street: "1 Pemberton Square", zipCode: "02108" }
  },
  "San Francisco-Oakland-Berkeley": {
    city: "San Francisco",
    state: "CA",
    counties: ["San Francisco", "Alameda", "San Mateo"],
    surroundingCities: ["Oakland", "Berkeley", "San Mateo", "Fremont", "Hayward"],
    msa_region: "SF Bay Area",
    coordinates: { latitude: "37.7749", longitude: "-122.4194" },
    address: { street: "400 McAllister St", zipCode: "94102" }
  },
  "Phoenix-Mesa-Chandler": {
    city: "Phoenix",
    state: "AZ",
    counties: ["Maricopa", "Pinal"],
    surroundingCities: ["Mesa", "Chandler", "Scottsdale", "Gilbert", "Tempe"],
    msa_region: "Valley of the Sun",
    coordinates: { latitude: "33.4484", longitude: "-112.0740" },
    address: { street: "201 W Jefferson St", zipCode: "85003" }
  },
  "Riverside-San Bernardino-Ontario": {
    city: "Riverside",
    state: "CA",
    counties: ["Riverside", "San Bernardino"],
    surroundingCities: ["San Bernardino", "Ontario", "Corona", "Moreno Valley", "Fontana"],
    msa_region: "Inland Empire",
    coordinates: { latitude: "33.9806", longitude: "-117.3755" },
    address: { street: "4050 Main St", zipCode: "92501" }
  },
  "Detroit-Warren-Dearborn": {
    city: "Detroit",
    state: "MI",
    counties: ["Wayne", "Oakland", "Macomb"],
    surroundingCities: ["Warren", "Dearborn", "Sterling Heights", "Troy", "Livonia"],
    msa_region: "Metro Detroit",
    coordinates: { latitude: "42.3314", longitude: "-83.0458" },
    address: { street: "2 Woodward Ave", zipCode: "48226" }
  },
  "Seattle-Tacoma-Bellevue": {
    city: "Seattle",
    state: "WA",
    counties: ["King", "Pierce", "Snohomish"],
    surroundingCities: ["Tacoma", "Bellevue", "Everett", "Renton", "Kent"],
    msa_region: "Puget Sound Region",
    coordinates: { latitude: "47.6062", longitude: "-122.3321" },
    address: { street: "516 3rd Ave", zipCode: "98104" }
  },
  "Minneapolis-St. Paul-Bloomington": {
    city: "Minneapolis",
    state: "MN",
    counties: ["Hennepin", "Ramsey", "Dakota", "Anoka", "Washington"],
    surroundingCities: ["St. Paul", "Bloomington", "Brooklyn Park", "Plymouth", "Eagan"],
    msa_region: "Twin Cities",
    coordinates: { latitude: "44.9778", longitude: "-93.2650" },
    address: { street: "300 S 6th St", zipCode: "55487" }
  },
  "San Diego-Carlsbad": {
    city: "San Diego",
    state: "CA",
    counties: ["San Diego"],
    surroundingCities: ["Carlsbad", "Oceanside", "Chula Vista", "El Cajon", "Escondido"],
    msa_region: "San Diego County",
    coordinates: { latitude: "32.7157", longitude: "-117.1611" },
    address: { street: "220 W Broadway", zipCode: "92101" }
  },
  "Tampa-St. Petersburg-Clearwater": {
    city: "Tampa",
    state: "FL",
    counties: ["Hillsborough", "Pinellas", "Pasco", "Hernando"],
    surroundingCities: ["St. Petersburg", "Clearwater", "Largo", "Brandon", "Spring Hill"],
    msa_region: "Tampa Bay Area",
    coordinates: { latitude: "27.9506", longitude: "-82.4572" },
    address: { street: "800 E Twiggs St", zipCode: "33602" }
  },
  "Denver-Aurora-Lakewood": {
    city: "Denver",
    state: "CO",
    counties: ["Denver", "Arapahoe", "Jefferson", "Adams", "Douglas"],
    surroundingCities: ["Aurora", "Lakewood", "Centennial", "Thornton", "Arvada"],
    msa_region: "Front Range Urban Corridor",
    coordinates: { latitude: "39.7392", longitude: "-104.9903" },
    address: { street: "1437 Bannock St", zipCode: "80202" }
  },
  "Baltimore-Columbia-Towson": {
    city: "Baltimore",
    state: "MD",
    counties: ["Baltimore City", "Baltimore County", "Anne Arundel", "Howard", "Harford"],
    surroundingCities: ["Columbia", "Towson", "Ellicott City", "Glen Burnie", "Dundalk"],
    msa_region: "Central Maryland",
    coordinates: { latitude: "39.2904", longitude: "-76.6122" },
    address: { street: "100 N Calvert St", zipCode: "21202" }
  },
  "St. Louis-Metro East": {
    city: "St. Louis",
    state: "MO",
    counties: ["St. Louis City", "St. Louis County", "St. Charles"],
    surroundingCities: ["Clayton", "Florissant", "Belleville", "Alton", "Granite City"],
    msa_region: "Greater St. Louis",
    coordinates: { latitude: "38.6270", longitude: "-90.1994" },
    address: { street: "10 N Tucker Blvd", zipCode: "63101" }
  },
  "Charlotte-Concord-Gastonia": {
    city: "Charlotte",
    state: "NC",
    counties: ["Mecklenburg", "Gaston", "Union", "Cabarrus", "Iredell"],
    surroundingCities: ["Concord", "Gastonia", "Rock Hill", "Huntersville", "Kannapolis"],
    msa_region: "Metro Charlotte",
    coordinates: { latitude: "35.2271", longitude: "-80.8431" },
    address: { street: "832 E 4th St", zipCode: "28202" }
  },
  "Orlando-Kissimmee-Sanford": {
    city: "Orlando",
    state: "FL",
    counties: ["Orange", "Seminole", "Osceola", "Lake"],
    surroundingCities: ["Kissimmee", "Sanford", "Altamonte Springs", "Winter Park", "Apopka"],
    msa_region: "Central Florida",
    coordinates: { latitude: "28.5383", longitude: "-81.3792" },
    address: { street: "425 N Orange Ave", zipCode: "32801" }
  },
  "San Antonio-New Braunfels": {
    city: "San Antonio",
    state: "TX",
    counties: ["Bexar", "Comal", "Guadalupe"],
    surroundingCities: ["New Braunfels", "Schertz", "Cibolo", "Converse", "Universal City"],
    msa_region: "Greater San Antonio",
    coordinates: { latitude: "29.4241", longitude: "-98.4936" },
    address: { street: "300 Dolorosa St", zipCode: "78205" }
  },
  "Portland-Vancouver-Hillsboro": {
    city: "Portland",
    state: "OR",
    counties: ["Multnomah", "Washington", "Clackamas", "Clark"],
    surroundingCities: ["Vancouver", "Hillsboro", "Gresham", "Beaverton", "Tigard"],
    msa_region: "Portland Metro",
    coordinates: { latitude: "45.5152", longitude: "-122.6784" },
    address: { street: "1021 SW 4th Ave", zipCode: "97204" }
  },
  "Sacramento-Roseville-Folsom": {
    city: "Sacramento",
    state: "CA",
    counties: ["Sacramento", "Placer", "El Dorado", "Yolo"],
    surroundingCities: ["Roseville", "Folsom", "Elk Grove", "Citrus Heights", "Davis"],
    msa_region: "Greater Sacramento",
    coordinates: { latitude: "38.5816", longitude: "-121.4944" },
    address: { street: "720 9th St", zipCode: "95814" }
  },
  "Pittsburgh-New Castle-Weirton": {
    city: "Pittsburgh",
    state: "PA",
    counties: ["Allegheny", "Beaver", "Butler", "Washington", "Westmoreland"],
    surroundingCities: ["New Castle", "Weirton", "Bethel Park", "Monroeville", "Penn Hills"],
    msa_region: "Western Pennsylvania",
    coordinates: { latitude: "40.4406", longitude: "-79.9959" },
    address: { street: "414 Grant St", zipCode: "15219" }
  },
  "Las Vegas-Henderson-Paradise": {
    city: "Las Vegas",
    state: "NV",
    counties: ["Clark"],
    surroundingCities: ["Henderson", "Paradise", "North Las Vegas", "Spring Valley", "Enterprise"],
    msa_region: "Southern Nevada",
    coordinates: { latitude: "36.1699", longitude: "-115.1398" },
    address: { street: "200 Lewis Ave", zipCode: "89101" }
  },
  "Austin-Round Rock-Georgetown": {
    city: "Austin",
    state: "TX",
    counties: ["Travis", "Williamson", "Hays", "Bastrop", "Caldwell"],
    surroundingCities: ["Round Rock", "Georgetown", "Cedar Park", "San Marcos", "Pflugerville"],
    msa_region: "Central Texas",
    coordinates: { latitude: "30.2672", longitude: "-97.7431" },
    address: { street: "1000 Guadalupe St", zipCode: "78701" }
  },
  "Columbus-Marion-Zanesville": {
    city: "Columbus",
    state: "OH",
    counties: ["Franklin", "Delaware", "Licking"],
    surroundingCities: ["Dublin", "Westerville", "Reynoldsburg", "Grove City", "Hilliard"],
    msa_region: "Central Ohio",
    coordinates: { latitude: "39.9612", longitude: "-82.9988" },
    address: { street: "369 S High St", zipCode: "43215" }
  },
  "Kansas City-Overland Park": {
    city: "Kansas City",
    state: "MO",
    counties: ["Jackson", "Clay", "Platte"],
    surroundingCities: ["Overland Park", "Independence", "Lee's Summit", "Olathe", "Shawnee"],
    msa_region: "Metro Kansas City",
    coordinates: { latitude: "39.0997", longitude: "-94.5786" },
    address: { street: "415 E 12th St", zipCode: "64106" }
  },
  "Cincinnati-Wilmington": {
    city: "Cincinnati",
    state: "OH",
    counties: ["Hamilton", "Butler", "Warren"],
    surroundingCities: ["Norwood", "Forest Park", "Mason", "Fairfield", "West Chester"],
    msa_region: "Greater Cincinnati",
    coordinates: { latitude: "39.1031", longitude: "-84.5120" },
    address: { street: "1000 Main St", zipCode: "45202" }
  },
  "Cleveland-Akron-Canton": {
    city: "Cleveland",
    state: "OH",
    counties: ["Cuyahoga", "Summit", "Lake"],
    surroundingCities: ["Akron", "Parma", "Lakewood", "Euclid", "Cleveland Heights"],
    msa_region: "Northeast Ohio",
    coordinates: { latitude: "41.4993", longitude: "-81.6944" },
    address: { street: "1200 Ontario St", zipCode: "44113" }
  },
  "Indianapolis-Carmel-Anderson": {
    city: "Indianapolis",
    state: "IN",
    counties: ["Marion", "Hamilton", "Johnson"],
    surroundingCities: ["Carmel", "Fishers", "Noblesville", "Greenwood", "Lawrence"],
    msa_region: "Central Indiana",
    coordinates: { latitude: "39.7684", longitude: "-86.1581" },
    address: { street: "200 E Washington St", zipCode: "46204" }
  },
  "San Jose-Sunnyvale-Santa Clara": {
    city: "San Jose",
    state: "CA",
    counties: ["Santa Clara"],
    surroundingCities: ["Sunnyvale", "Santa Clara", "Mountain View", "Milpitas", "Cupertino"],
    msa_region: "Silicon Valley",
    coordinates: { latitude: "37.3382", longitude: "-121.8863" },
    address: { street: "191 N 1st St", zipCode: "95113" }
  },
  "Nashville-Davidson-Murfreesboro": {
    city: "Nashville",
    state: "TN",
    counties: ["Davidson", "Rutherford", "Williamson"],
    surroundingCities: ["Murfreesboro", "Franklin", "Hendersonville", "Smyrna", "Brentwood"],
    msa_region: "Middle Tennessee",
    coordinates: { latitude: "36.1627", longitude: "-86.7816" },
    address: { street: "1 Public Square", zipCode: "37201" }
  },
  "Virginia Beach-Norfolk-Newport News": {
    city: "Virginia Beach",
    state: "VA",
    counties: ["Virginia Beach City", "Norfolk City", "Newport News City"],
    surroundingCities: ["Norfolk", "Newport News", "Chesapeake", "Hampton", "Portsmouth"],
    msa_region: "Hampton Roads",
    coordinates: { latitude: "36.8529", longitude: "-75.9780" },
    address: { street: "2425 Nimmo Pkwy", zipCode: "23456" }
  },
  "Providence-Warwick": {
    city: "Providence",
    state: "RI",
    counties: ["Providence", "Kent", "Bristol"],
    surroundingCities: ["Warwick", "Cranston", "Pawtucket", "East Providence", "Woonsocket"],
    msa_region: "Greater Providence",
    coordinates: { latitude: "41.8240", longitude: "-71.4128" },
    address: { street: "250 Benefit St", zipCode: "02903" }
  },
  "Milwaukee-Waukesha": {
    city: "Milwaukee",
    state: "WI",
    counties: ["Milwaukee", "Waukesha", "Washington"],
    surroundingCities: ["Waukesha", "West Allis", "Wauwatosa", "New Berlin", "Brookfield"],
    msa_region: "Greater Milwaukee",
    coordinates: { latitude: "43.0389", longitude: "-87.9065" },
    address: { street: "901 N 9th St", zipCode: "53233" }
  },
  "Jacksonville-St. Augustine": {
    city: "Jacksonville",
    state: "FL",
    counties: ["Duval", "St. Johns", "Clay"],
    surroundingCities: ["St. Augustine", "Orange Park", "Jacksonville Beach", "Ponte Vedra", "Neptune Beach"],
    msa_region: "First Coast",
    coordinates: { latitude: "30.3322", longitude: "-81.6557" },
    address: { street: "501 W Adams St", zipCode: "32202" }
  },
  "Oklahoma City": {
    city: "Oklahoma City",
    state: "OK",
    counties: ["Oklahoma", "Cleveland", "Canadian"],
    surroundingCities: ["Norman", "Edmond", "Moore", "Midwest City", "Del City"],
    msa_region: "Central Oklahoma",
    coordinates: { latitude: "35.4676", longitude: "-97.5164" },
    address: { street: "200 N Walker Ave", zipCode: "73102" }
  },
  "Raleigh-Cary": {
    city: "Raleigh",
    state: "NC",
    counties: ["Wake", "Durham", "Johnston"],
    surroundingCities: ["Cary", "Durham", "Chapel Hill", "Apex", "Wake Forest"],
    msa_region: "Research Triangle",
    coordinates: { latitude: "35.7796", longitude: "-78.6382" },
    address: { street: "316 Fayetteville St", zipCode: "27601" }
  },
  "Memphis": {
    city: "Memphis",
    state: "TN",
    counties: ["Shelby", "DeSoto", "Crittenden"],
    surroundingCities: ["Germantown", "Collierville", "Bartlett", "Southaven", "Horn Lake"],
    msa_region: "Mid-South",
    coordinates: { latitude: "35.1495", longitude: "-90.0490" },
    address: { street: "140 Adams Ave", zipCode: "38103" }
  },
  "Richmond": {
    city: "Richmond",
    state: "VA",
    counties: ["Richmond City", "Henrico", "Chesterfield"],
    surroundingCities: ["Petersburg", "Hopewell", "Colonial Heights", "Glen Allen", "Chester"],
    msa_region: "Greater Richmond",
    coordinates: { latitude: "37.5407", longitude: "-77.4360" },
    address: { street: "400 N 9th St", zipCode: "23219" }
  },
  "Buffalo-Cheektowaga": {
    city: "Buffalo",
    state: "NY",
    counties: ["Erie", "Niagara"],
    surroundingCities: ["Cheektowaga", "Tonawanda", "Amherst", "Kenmore", "Lackawanna"],
    msa_region: "Western New York",
    coordinates: { latitude: "42.8864", longitude: "-78.8784" },
    address: { street: "50 Delaware Ave", zipCode: "14202" }
  },
	"Louisville/Jefferson County": {
    city: "Louisville",
    state: "KY",
    counties: ["Jefferson", "Bullitt", "Oldham"],
    surroundingCities: ["Jeffersonville", "New Albany", "Clarksville", "Shepherdsville", "La Grange"],
    msa_region: "Greater Louisville",
    coordinates: { latitude: "38.2527", longitude: "-85.7585" },
    address: { street: "527 W Jefferson St", zipCode: "40202" }
  },
  "Salt Lake City-West Valley City": {
    city: "Salt Lake City",
    state: "UT",
    counties: ["Salt Lake", "Davis", "Weber"],
    surroundingCities: ["West Valley City", "West Jordan", "Sandy", "Murray", "Ogden"],
    msa_region: "Wasatch Front",
    coordinates: { latitude: "40.7608", longitude: "-111.8910" },
    address: { street: "451 S State St", zipCode: "84111" }
  },
  "Hartford-West Hartford-East Hartford": {
    city: "Hartford",
    state: "CT",
    counties: ["Hartford", "Tolland", "Middlesex"],
    surroundingCities: ["West Hartford", "East Hartford", "Bristol", "Manchester", "New Britain"],
    msa_region: "Greater Hartford",
    coordinates: { latitude: "41.7637", longitude: "-72.6851" },
    address: { street: "550 Main St", zipCode: "06103" }
  },
  "Birmingham-Hoover": {
    city: "Birmingham",
    state: "AL",
    counties: ["Jefferson", "Shelby"],
    surroundingCities: ["Hoover", "Vestavia Hills", "Bessemer", "Homewood", "Mountain Brook"],
    msa_region: "Greater Birmingham",
    coordinates: { latitude: "33.5207", longitude: "-86.8025" },
    address: { street: "710 N 20th St", zipCode: "35203" }
  },
  "Rochester": {
    city: "Rochester",
    state: "NY",
    counties: ["Monroe", "Livingston", "Ontario"],
    surroundingCities: ["Brighton", "Greece", "Irondequoit", "Webster", "Henrietta"],
    msa_region: "Greater Rochester",
    coordinates: { latitude: "43.1566", longitude: "-77.6088" },
    address: { street: "30 Church St", zipCode: "14614" }
  },
  "Tucson": {
    city: "Tucson",
    state: "AZ",
    counties: ["Pima"],
    surroundingCities: ["Oro Valley", "Marana", "Sahuarita", "South Tucson", "Catalina Foothills"],
    msa_region: "Greater Tucson",
    coordinates: { latitude: "32.2226", longitude: "-110.9747" },
    address: { street: "255 W Alameda St", zipCode: "85701" }
  },
  "Fresno": {
    city: "Fresno",
    state: "CA",
    counties: ["Fresno"],
    surroundingCities: ["Clovis", "Madera", "Reedley", "Sanger", "Selma"],
    msa_region: "Central Valley",
    coordinates: { latitude: "36.7378", longitude: "-119.7871" },
    address: { street: "2600 Fresno St", zipCode: "93721" }
  },
  "Honolulu": {
    city: "Honolulu",
    state: "HI",
    counties: ["Honolulu"],
    surroundingCities: ["Pearl City", "Waipahu", "Kailua", "Kaneohe", "Mililani Town"],
    msa_region: "Oahu",
    coordinates: { latitude: "21.3069", longitude: "-157.8583" },
    address: { street: "530 S King St", zipCode: "96813" }
  },
  "Omaha-Council Bluffs": {
    city: "Omaha",
    state: "NE",
    counties: ["Douglas", "Sarpy", "Pottawattamie"],
    surroundingCities: ["Council Bluffs", "Bellevue", "Papillion", "La Vista", "Ralston"],
    msa_region: "Greater Omaha",
    coordinates: { latitude: "41.2565", longitude: "-95.9345" },
    address: { street: "1819 Farnam St", zipCode: "68183" }
  },
  "Greenville-Anderson-Mauldin": {
    city: "Greenville",
    state: "SC",
    counties: ["Greenville", "Anderson", "Pickens"],
    surroundingCities: ["Anderson", "Mauldin", "Easley", "Simpsonville", "Greer"],
    msa_region: "Upstate South Carolina",
    coordinates: { latitude: "34.8526", longitude: "-82.3940" },
    address: { street: "206 S Main St", zipCode: "29601" }
  },
  "Albuquerque": {
    city: "Albuquerque",
    state: "NM",
    counties: ["Bernalillo"],
    surroundingCities: ["Rio Rancho", "South Valley", "Los Lunas", "Belen", "Paradise Hills"],
    msa_region: "Greater Albuquerque",
    coordinates: { latitude: "35.0844", longitude: "-106.6504" },
    address: { street: "400 Marquette Ave NW", zipCode: "87102" }
  },
  "Bakersfield": {
    city: "Bakersfield",
    state: "CA",
    counties: ["Kern"],
    surroundingCities: ["Delano", "Ridgecrest", "Wasco", "Shafter", "Arvin"],
    msa_region: "Central Valley",
    coordinates: { latitude: "35.3733", longitude: "-119.0187" },
    address: { street: "1501 Truxtun Ave", zipCode: "93301" }
  },
  "Tulsa": {
    city: "Tulsa",
    state: "OK",
    counties: ["Tulsa", "Rogers", "Wagoner"],
    surroundingCities: ["Broken Arrow", "Owasso", "Sand Springs", "Bixby", "Jenks"],
    msa_region: "Greater Tulsa",
    coordinates: { latitude: "36.1540", longitude: "-95.9928" },
    address: { street: "200 Civic Center", zipCode: "74103" }
  },
  "Urban Honolulu": {
    city: "Honolulu",
    state: "HI",
    counties: ["Honolulu"],
    surroundingCities: ["Pearl City", "Waipahu", "Kailua", "Kaneohe", "Mililani Town"],
    msa_region: "Oahu",
    coordinates: { latitude: "21.3069", longitude: "-157.8583" },
    address: { street: "530 S King St", zipCode: "96813" }
  },
  "New Orleans-Metairie": {
    city: "New Orleans",
    state: "LA",
    counties: ["Orleans", "Jefferson"],
    surroundingCities: ["Metairie", "Kenner", "Marrero", "Harvey", "LaPlace"],
    msa_region: "Greater New Orleans",
    coordinates: { latitude: "29.9511", longitude: "-90.0715" },
    address: { street: "1300 Perdido St", zipCode: "70112" }
  },
  "Bridgeport-Stamford-Norwalk": {
    city: "Bridgeport",
    state: "CT",
    counties: ["Fairfield"],
    surroundingCities: ["Stamford", "Norwalk", "Danbury", "Stratford", "Shelton"],
    msa_region: "Greater Bridgeport",
    coordinates: { latitude: "41.1865", longitude: "-73.1952" },
    address: { street: "45 Lyon Terrace", zipCode: "06604" }
  },
  "Buffalo-Cheektowaga-Niagara Falls": {
    city: "Buffalo",
    state: "NY",
    counties: ["Erie", "Niagara"],
    surroundingCities: ["Cheektowaga", "Niagara Falls", "Amherst", "Tonawanda", "Kenmore"],
    msa_region: "Greater Buffalo",
    coordinates: { latitude: "42.8864", longitude: "-78.8784" },
    address: { street: "65 Niagara Square", zipCode: "14202" }
  },
  "Worcester": {
    city: "Worcester",
    state: "MA",
    counties: ["Worcester"],
    surroundingCities: ["Framingham", "Leominster", "Shrewsbury", "Auburn", "Holden"],
    msa_region: "Central Massachusetts",
    coordinates: { latitude: "42.2626", longitude: "-71.8023" },
    address: { street: "455 Main St", zipCode: "01608" }
  },
  "Albany-Schenectady-Troy": {
    city: "Albany",
    state: "NY",
    counties: ["Albany", "Schenectady", "Rensselaer"],
    surroundingCities: ["Schenectady", "Troy", "Saratoga Springs", "Clifton Park", "Colonie"],
    msa_region: "Capital Region",
    coordinates: { latitude: "42.6526", longitude: "-73.7562" },
    address: { street: "24 Eagle St", zipCode: "12207" }
  },
  "Knoxville": {
    city: "Knoxville",
    state: "TN",
    counties: ["Knox", "Anderson", "Blount"],
    surroundingCities: ["Maryville", "Oak Ridge", "Alcoa", "Farragut", "Sevierville"],
    msa_region: "Greater Knoxville",
    coordinates: { latitude: "35.9606", longitude: "-83.9207" },
    address: { street: "400 Main St", zipCode: "37902" }
  },
  "El Paso": {
    city: "El Paso",
    state: "TX",
    counties: ["El Paso"],
    surroundingCities: ["Socorro", "Horizon City", "Anthony", "Clint", "Fabens"],
    msa_region: "Greater El Paso",
    coordinates: { latitude: "31.7619", longitude: "-106.4850" },
    address: { street: "300 N Campbell St", zipCode: "79901" }
  },
  "McAllen-Edinburg-Mission": {
    city: "McAllen",
    state: "TX",
    counties: ["Hidalgo"],
    surroundingCities: ["Edinburg", "Mission", "Pharr", "Weslaco", "Mercedes"],
    msa_region: "Rio Grande Valley",
    coordinates: { latitude: "26.2034", longitude: "-98.2300" },
    address: { street: "1300 S 10th St", zipCode: "78501" }
  },
  "Allentown-Bethlehem-Easton": {
    city: "Allentown",
    state: "PA",
    counties: ["Lehigh", "Northampton"],
    surroundingCities: ["Bethlehem", "Easton", "Emmaus", "Whitehall", "Hanover Township"],
    msa_region: "Lehigh Valley",
    coordinates: { latitude: "40.6084", longitude: "-75.4902" },
    address: { street: "435 Hamilton St", zipCode: "18101" }
  },
  "Oxnard-Thousand Oaks-Ventura": {
    city: "Oxnard",
    state: "CA",
    counties: ["Ventura"],
    surroundingCities: ["Thousand Oaks", "Ventura", "Camarillo", "Simi Valley", "Moorpark"],
    msa_region: "Ventura County",
    coordinates: { latitude: "34.1975", longitude: "-119.1771" },
    address: { street: "300 W 3rd St", zipCode: "93030" }
  },
  "Greensboro-High Point": {
    city: "Greensboro",
    state: "NC",
    counties: ["Guilford", "Randolph", "Rockingham"],
    surroundingCities: ["High Point", "Winston-Salem", "Burlington", "Asheboro", "Reidsville"],
    msa_region: "Piedmont Triad",
    coordinates: { latitude: "36.0726", longitude: "-79.7920" },
    address: { street: "300 W Washington St", zipCode: "27401" }
  },
  "Dayton": {
    city: "Dayton",
    state: "OH",
    counties: ["Montgomery", "Greene", "Miami"],
    surroundingCities: ["Kettering", "Beavercreek", "Huber Heights", "Centerville", "Fairborn"],
    msa_region: "Greater Dayton",
    coordinates: { latitude: "39.7589", longitude: "-84.1916" },
    address: { street: "101 W 3rd St", zipCode: "45402" }
  },
  "Columbia": {
    city: "Columbia",
    state: "SC",
    counties: ["Richland", "Lexington"],
    surroundingCities: ["Lexington", "Irmo", "Forest Acres", "Cayce", "West Columbia"],
    msa_region: "Greater Columbia",
    coordinates: { latitude: "34.0007", longitude: "-81.0348" },
    address: { street: "1737 Main St", zipCode: "29201" }
  },
  "Chattanooga": {
    city: "Chattanooga",
    state: "TN",
    counties: ["Hamilton", "Marion", "Catoosa"],
    surroundingCities: ["East Ridge", "Red Bank", "Soddy-Daisy", "Signal Mountain", "Collegedale"],
    msa_region: "Greater Chattanooga",
    coordinates: { latitude: "35.0456", longitude: "-85.3097" },
    address: { street: "101 E 11th St", zipCode: "37402" }
  },
  "Little Rock-North Little Rock-Conway": {
    city: "Little Rock",
    state: "AR",
    counties: ["Pulaski", "Faulkner", "Saline"],
    surroundingCities: ["North Little Rock", "Conway", "Jacksonville", "Sherwood", "Maumelle"],
    msa_region: "Greater Little Rock",
    coordinates: { latitude: "34.7465", longitude: "-92.2896" },
    address: { street: "500 W Markham St", zipCode: "72201" }
  },
  "Des Moines-West Des Moines": {
    city: "Des Moines",
    state: "IA",
    counties: ["Polk", "Dallas", "Warren"],
    surroundingCities: ["West Des Moines", "Ankeny", "Urbandale", "Johnston", "Clive"],
    msa_region: "Greater Des Moines",
    coordinates: { latitude: "41.5868", longitude: "-93.6250" },
    address: { street: "400 Robert D Ray Dr", zipCode: "50309" }
  },
  "Charleston-North Charleston": {
    city: "Charleston",
    state: "SC",
    counties: ["Charleston", "Berkeley", "Dorchester"],
    surroundingCities: ["North Charleston", "Mount Pleasant", "Summerville", "Goose Creek", "Hanahan"],
    msa_region: "Greater Charleston",
    coordinates: { latitude: "32.7765", longitude: "-79.9311" },
    address: { street: "80 Broad St", zipCode: "29401" }
  },
  "Madison": {
    city: "Madison",
    state: "WI",
    counties: ["Dane"],
    surroundingCities: ["Sun Prairie", "Middleton", "Fitchburg", "Verona", "Waunakee"],
    msa_region: "Greater Madison",
    coordinates: { latitude: "43.0731", longitude: "-89.4012" },
    address: { street: "210 Martin Luther King Jr Blvd", zipCode: "53703" }
  },
  "Syracuse": {
    city: "Syracuse",
    state: "NY",
    counties: ["Onondaga", "Oswego", "Madison"],
    surroundingCities: ["Liverpool", "Camillus", "Cicero", "North Syracuse", "Baldwinsville"],
    msa_region: "Greater Syracuse",
    coordinates: { latitude: "43.0481", longitude: "-76.1474" },
    address: { street: "233 E Washington St", zipCode: "13202" }
  },
  "Wichita": {
    city: "Wichita",
    state: "KS",
    counties: ["Sedgwick", "Butler", "Harvey"],
    surroundingCities: ["Derby", "Andover", "Haysville", "Park City", "Bel Aire"],
    msa_region: "Greater Wichita",
    coordinates: { latitude: "37.6872", longitude: "-97.3301" },
    address: { street: "455 N Main St", zipCode: "67202" }
  },
  "Spokane-Spokane Valley": {
    city: "Spokane",
    state: "WA",
    counties: ["Spokane"],
    surroundingCities: ["Spokane Valley", "Liberty Lake", "Cheney", "Medical Lake", "Airway Heights"],
    msa_region: "Greater Spokane",
    coordinates: { latitude: "47.6588", longitude: "-117.4260" },
    address: { street: "808 W Spokane Falls Blvd", zipCode: "99201" }
  },
  "Boise City": {
    city: "Boise",
    state: "ID",
    counties: ["Ada", "Canyon"],
    surroundingCities: ["Meridian", "Nampa", "Caldwell", "Eagle", "Kuna"],
    msa_region: "Treasure Valley",
    coordinates: { latitude: "43.6150", longitude: "-116.2023" },
    address: { street: "150 N Capitol Blvd", zipCode: "83702" }
  },
  "Augusta-Richmond County": {
    city: "Augusta",
    state: "GA",
    counties: ["Richmond", "Columbia"],
    surroundingCities: ["Martinez", "Evans", "Grovetown", "Hephzibah", "North Augusta"],
    msa_region: "Greater Augusta",
    coordinates: { latitude: "33.4709", longitude: "-81.9748" },
    address: { street: "530 Greene St", zipCode: "30901" }
  },
  "Jackson": {
    city: "Jackson",
    state: "MS",
    counties: ["Hinds", "Madison", "Rankin"],
    surroundingCities: ["Clinton", "Pearl", "Brandon", "Ridgeland", "Madison"],
    msa_region: "Greater Jackson",
    coordinates: { latitude: "32.2988", longitude: "-90.1848" },
    address: { street: "219 S President St", zipCode: "39201" }
  },
  "Provo-Orem": {
    city: "Provo",
    state: "UT",
    counties: ["Utah"],
    surroundingCities: ["Orem", "Lehi", "American Fork", "Pleasant Grove", "Springville"],
    msa_region: "Utah Valley",
    coordinates: { latitude: "40.2338", longitude: "-111.6585" },
    address: { street: "351 W Center St", zipCode: "84601" }
  },
  "Lakeland-Winter Haven": {
    city: "Lakeland",
    state: "FL",
    counties: ["Polk"],
    surroundingCities: ["Winter Haven", "Bartow", "Auburndale", "Haines City", "Lake Wales"],
    msa_region: "Greater Lakeland",
    coordinates: { latitude: "28.0395", longitude: "-81.9498" },
    address: { street: "228 S Massachusetts Ave", zipCode: "33801" }
  },
  "Youngstown-Warren-Boardman": {
    city: "Youngstown",
    state: "OH",
    counties: ["Mahoning", "Trumbull"],
    surroundingCities: ["Warren", "Boardman", "Austintown", "Niles", "Girard"],
    msa_region: "Mahoning Valley",
    coordinates: { latitude: "41.0998", longitude: "-80.6495" },
    address: { street: "26 Market St", zipCode: "44503" }
  },
  "Deltona-Daytona Beach-Ormond Beach": {
    city: "Daytona Beach",
    state: "FL",
    counties: ["Volusia"],
    surroundingCities: ["Deltona", "Ormond Beach", "Port Orange", "Holly Hill", "South Daytona"],
    msa_region: "Greater Daytona Beach",
    coordinates: { latitude: "29.2108", longitude: "-81.0228" },
    address: { street: "301 S Ridgewood Ave", zipCode: "32114" }
  },
  "Flint": {
    city: "Flint",
    state: "MI",
    counties: ["Genesee"],
    surroundingCities: ["Burton", "Grand Blanc", "Davison", "Swartz Creek", "Fenton"],
    msa_region: "Greater Flint",
    coordinates: { latitude: "43.0125", longitude: "-83.6875" },
    address: { street: "1101 S Saginaw St", zipCode: "48502" }
  },
  "Salisbury": {
    city: "Salisbury",
    state: "MD",
    counties: ["Wicomico", "Somerset", "Worcester"],
    surroundingCities: ["Ocean City", "Fruitland", "Berlin", "Crisfield", "Pocomoke City"],
    msa_region: "Eastern Shore",
    coordinates: { latitude: "38.3607", longitude: "-75.5994" },
    address: { street: "125 N Division St", zipCode: "21801" }
  },
  "Port St. Lucie": {
    city: "Port St. Lucie",
    state: "FL",
    counties: ["St. Lucie", "Martin"],
    surroundingCities: ["Fort Pierce", "Stuart", "Jensen Beach", "Palm City", "Tradition"],
    msa_region: "Treasure Coast",
    coordinates: { latitude: "27.2730", longitude: "-80.3582" },
    address: { street: "121 SW Port St Lucie Blvd", zipCode: "34984" }
  },
  "Springfield": {
    city: "Springfield",
    state: "MA",
    counties: ["Hampden", "Hampshire"],
    surroundingCities: ["Chicopee", "Holyoke", "Westfield", "West Springfield", "Agawam"],
    msa_region: "Greater Springfield",
    coordinates: { latitude: "42.1015", longitude: "-72.5898" },
    address: { street: "36 Court St", zipCode: "01103" }
  },
  "Lancaster": {
    city: "Lancaster",
    state: "PA",
    counties: ["Lancaster"],
    surroundingCities: ["Manheim", "Ephrata", "Lititz", "Columbia", "Elizabethtown"],
    msa_region: "Lancaster County",
    coordinates: { latitude: "40.0379", longitude: "-76.3055" },
    address: { street: "120 N Duke St", zipCode: "17602" }
  },
  "Modesto": {
    city: "Modesto",
    state: "CA",
    counties: ["Stanislaus"],
    surroundingCities: ["Turlock", "Riverbank", "Oakdale", "Ceres", "Patterson"],
    msa_region: "Central Valley",
    coordinates: { latitude: "37.6391", longitude: "-120.9969" },
    address: { street: "1010 10th St", zipCode: "95354" }
  },
  "Fayetteville": {
    city: "Fayetteville",
    state: "NC",
    counties: ["Cumberland"],
    surroundingCities: ["Hope Mills", "Spring Lake", "Fort Bragg", "Lumberton", "Pinehurst"],
    msa_region: "Cape Fear Region",
    coordinates: { latitude: "35.0527", longitude: "-78.8784" },
    address: { street: "433 Hay St", zipCode: "28301" }
  },
  "Santa Rosa-Petaluma": {
    city: "Santa Rosa",
    state: "CA",
    counties: ["Sonoma"],
    surroundingCities: ["Petaluma", "Rohnert Park", "Windsor", "Healdsburg", "Sebastopol"],
    msa_region: "North Bay",
    coordinates: { latitude: "38.4404", longitude: "-122.7141" },
    address: { street: "100 Santa Rosa Ave", zipCode: "95404" }
  },
  "Shreveport-Bossier City": {
    city: "Shreveport",
    state: "LA",
    counties: ["Caddo", "Bossier"],
    surroundingCities: ["Bossier City", "Minden", "Haughton", "Stonewall", "Blanchard"],
    msa_region: "Greater Shreveport",
    coordinates: { latitude: "32.5252", longitude: "-93.7502" },
    address: { street: "505 Travis St", zipCode: "71101" }
  },
  "Pensacola-Ferry Pass-Brent": {
    city: "Pensacola",
    state: "FL",
    counties: ["Escambia", "Santa Rosa"],
    surroundingCities: ["Ferry Pass", "Brent", "Gulf Breeze", "Warrington", "Bellview"],
    msa_region: "Greater Pensacola",
    coordinates: { latitude: "30.4213", longitude: "-87.2169" },
    address: { street: "222 W Main St", zipCode: "32502" }
  },
  "Myrtle Beach-Conway-North Myrtle Beach": {
    city: "Myrtle Beach",
    state: "SC",
    counties: ["Horry"],
    surroundingCities: ["Conway", "North Myrtle Beach", "Surfside Beach", "Murrells Inlet", "Georgetown"],
    msa_region: "Grand Strand",
    coordinates: { latitude: "33.6891", longitude: "-78.8867" },
    address: { street: "937 Broadway St", zipCode: "29577" }
  },
  "Salem": {
    city: "Salem",
    state: "OR",
    counties: ["Marion", "Polk"],
    surroundingCities: ["Keizer", "Woodburn", "Dallas", "Silverton", "Stayton"],
    msa_region: "Willamette Valley",
    coordinates: { latitude: "44.9429", longitude: "-123.0351" },
    address: { street: "555 Liberty St SE", zipCode: "97301" }
  },
  "Beaumont-Port Arthur": {
    city: "Beaumont",
    state: "TX",
    counties: ["Jefferson", "Hardin", "Orange"],
    surroundingCities: ["Port Arthur", "Orange", "Nederland", "Groves", "Lumberton"],
    msa_region: "Golden Triangle",
    coordinates: { latitude: "30.0802", longitude: "-94.1266" },
    address: { street: "801 Main St", zipCode: "77701" }
  },
  "Lafayette": {
    city: "Lafayette",
    state: "LA",
    counties: ["Lafayette", "Acadia", "St. Martin"],
    surroundingCities: ["Carencro", "Broussard", "Youngsville", "Scott", "Duson"],
    msa_region: "Acadiana",
    coordinates: { latitude: "30.2241", longitude: "-92.0198" },
    address: { street: "705 W University Ave", zipCode: "70506" }
  },
  "Visalia-Porterville": {
    city: "Visalia",
    state: "CA",
    counties: ["Tulare"],
    surroundingCities: ["Porterville", "Tulare", "Dinuba", "Hanford", "Exeter"],
    msa_region: "Central Valley",
    coordinates: { latitude: "36.3302", longitude: "-119.2921" },
    address: { street: "220 E Acequia Ave", zipCode: "93291" }
  },
  "Hickory-Lenoir-Morganton": {
    city: "Hickory",
    state: "NC",
    counties: ["Catawba", "Burke", "Caldwell"],
    surroundingCities: ["Lenoir", "Morganton", "Conover", "Newton", "Granite Falls"],
    msa_region: "Catawba Valley",
    coordinates: { latitude: "35.7342", longitude: "-81.3445" },
    address: { street: "76 N Center St", zipCode: "28601" }
  },
  "Killeen-Temple": {
    city: "Killeen",
    state: "TX",
    counties: ["Bell", "Coryell"],
    surroundingCities: ["Temple", "Harker Heights", "Copperas Cove", "Belton", "Fort Hood"],
    msa_region: "Central Texas",
    coordinates: { latitude: "31.1171", longitude: "-97.7278" },
    address: { street: "101 N College St", zipCode: "76541" }
  },
  "Gulfport-Biloxi": {
    city: "Gulfport",
    state: "MS",
    counties: ["Harrison", "Hancock"],
    surroundingCities: ["Biloxi", "Pascagoula", "Ocean Springs", "Long Beach", "D'Iberville"],
    msa_region: "Mississippi Gulf Coast",
    coordinates: { latitude: "30.3674", longitude: "-89.0928" },
    address: { street: "2300 15th St", zipCode: "39501" }
  },
  "Davenport-Moline-Rock Island": {
    city: "Davenport",
    state: "IA",
    counties: ["Scott", "Rock Island", "Henry"],
    surroundingCities: ["Moline", "Rock Island", "Bettendorf", "East Moline", "Silvis"],
    msa_region: "Quad Cities",
    coordinates: { latitude: "41.5236", longitude: "-90.5776" },
    address: { street: "226 W 4th St", zipCode: "52801" }
  },
  "Asheville": {
    city: "Asheville",
    state: "NC",
    counties: ["Buncombe", "Henderson", "Madison"],
    surroundingCities: ["Hendersonville", "Weaverville", "Arden", "Fletcher", "Candler"],
    msa_region: "Greater Asheville",
    coordinates: { latitude: "35.5951", longitude: "-82.5515" },
    address: { street: "70 Court Plaza", zipCode: "28801" }
  },
  "Rockford": {
    city: "Rockford",
    state: "IL",
    counties: ["Winnebago", "Boone"],
    surroundingCities: ["Loves Park", "Machesney Park", "Belvidere", "Roscoe", "Rockton"],
    msa_region: "Greater Rockford",
    coordinates: { latitude: "42.2711", longitude: "-89.0940" },
    address: { street: "425 E State St", zipCode: "61104" }
  },
  "Huntsville": {
    city: "Huntsville",
    state: "AL",
    counties: ["Madison", "Limestone"],
    surroundingCities: ["Madison", "Athens", "Decatur", "Harvest", "Mooresville"],
    msa_region: "Greater Huntsville",
    coordinates: { latitude: "34.7304", longitude: "-86.5861" },
    address: { street: "308 Fountain Circle", zipCode: "35801" }
  },
  "Canton-Massillon": {
    city: "Canton",
    state: "OH",
    counties: ["Stark", "Carroll"],
    surroundingCities: ["Massillon", "Alliance", "North Canton", "Louisville", "Perry Heights"],
    msa_region: "Greater Canton",
    coordinates: { latitude: "40.7989", longitude: "-81.3784" },
    address: { street: "218 Cleveland Ave SW", zipCode: "44702" }
  },
  "Savannah": {
    city: "Savannah",
    state: "GA",
    counties: ["Chatham", "Effingham", "Bryan"],
    surroundingCities: ["Pooler", "Garden City", "Port Wentworth", "Rincon", "Bloomingdale"],
    msa_region: "Greater Savannah",
    coordinates: { latitude: "32.0809", longitude: "-81.0912" },
    address: { street: "2 E Bay St", zipCode: "31401" }
  },
  "Montgomery": {
    city: "Montgomery",
    state: "AL",
    counties: ["Montgomery"],
    surroundingCities: ["Prattville", "Millbrook", "Pike Road", "Wetumpka", "Tallassee"],
    msa_region: "Greater Montgomery",
    coordinates: { latitude: "32.3668", longitude: "-86.3000" },
    address: { street: "103 N Perry St", zipCode: "36104" }
  },
  "Eugene": {
    city: "Eugene",
    state: "OR",
    counties: ["Lane"],
    surroundingCities: ["Springfield", "Cottage Grove", "Creswell", "Veneta", "Junction City"],
    msa_region: "Willamette Valley",
    coordinates: { latitude: "44.0521", longitude: "-123.0868" },
    address: { street: "777 Pearl St", zipCode: "97401" }
  },
  "Tallahassee": {
    city: "Tallahassee",
    state: "FL",
    counties: ["Leon", "Gadsden", "Wakulla"],
    surroundingCities: ["Crawfordville", "Quincy", "Havana", "Midway", "Woodville"],
    msa_region: "Greater Tallahassee",
    coordinates: { latitude: "30.4383", longitude: "-84.2807" },
    address: { street: "300 S Adams St", zipCode: "32301" }
  },
  "Anchorage": {
    city: "Anchorage",
    state: "AK",
    counties: ["Anchorage"],
    surroundingCities: ["Eagle River", "Chugiak", "Girdwood", "Palmer", "Wasilla"],
    msa_region: "Southcentral Alaska",
    coordinates: { latitude: "61.2181", longitude: "-149.9003" },
    address: { street: "632 W 6th Ave", zipCode: "99501" }
  },
  "Peoria": {
    city: "Peoria",
    state: "IL",
    counties: ["Peoria", "Tazewell", "Woodford"],
    surroundingCities: ["East Peoria", "Pekin", "Washington", "Morton", "Chillicothe"],
    msa_region: "Greater Peoria",
    coordinates: { latitude: "40.6936", longitude: "-89.5890" },
    address: { street: "419 Fulton St", zipCode: "61602" }
  },
  "Santa Barbara-Santa Maria": {
    city: "Santa Barbara",
    state: "CA",
    counties: ["Santa Barbara"],
    surroundingCities: ["Santa Maria", "Goleta", "Carpinteria", "Lompoc", "Solvang"],
    msa_region: "Central Coast",
    coordinates: { latitude: "34.4208", longitude: "-119.6982" },
    address: { street: "735 Anacapa St", zipCode: "93101" }
  },
  "Fort Wayne": {
    city: "Fort Wayne",
    state: "IN",
    counties: ["Allen"],
    surroundingCities: ["New Haven", "Huntington", "Auburn", "Leo-Cedarville", "Monroeville"],
    msa_region: "Greater Fort Wayne",
    coordinates: { latitude: "41.0793", longitude: "-85.1394" },
    address: { street: "1 E Main St", zipCode: "46802" }
  },
  "Salinas": {
    city: "Salinas",
    state: "CA",
    counties: ["Monterey"],
    surroundingCities: ["Seaside", "Marina", "Soledad", "Gonzales", "King City"],
    msa_region: "Monterey Bay",
    coordinates: { latitude: "36.6777", longitude: "-121.6555" },
    address: { street: "200 Lincoln Ave", zipCode: "93901" }
  },
  "Springfield": {
    city: "Springfield",
    state: "MO",
    counties: ["Greene", "Christian"],
    surroundingCities: ["Nixa", "Ozark", "Republic", "Battlefield", "Willard"],
    msa_region: "Greater Springfield",
    coordinates: { latitude: "37.2089", longitude: "-93.2923" },
    address: { street: "840 Boonville Ave", zipCode: "65802" }
  },
  "Lansing-East Lansing": {
    city: "Lansing",
    state: "MI",
    counties: ["Ingham", "Eaton", "Clinton"],
    surroundingCities: ["East Lansing", "Okemos", "Holt", "Grand Ledge", "Williamston"],
    msa_region: "Greater Lansing",
    coordinates: { latitude: "42.7325", longitude: "-84.5555" },
    address: { street: "124 W Michigan Ave", zipCode: "48933" }
  },
  "Palm Bay-Melbourne-Titusville": {
    city: "Palm Bay",
    state: "FL",
    counties: ["Brevard"],
    surroundingCities: ["Melbourne", "Titusville", "Rockledge", "Cocoa", "Merritt Island"],
    msa_region: "Space Coast",
    coordinates: { latitude: "28.0345", longitude: "-80.5887" },
    address: { street: "120 Malabar Rd SE", zipCode: "32907" }
  },
  "Vallejo-Fairfield": {
    city: "Vallejo",
    state: "CA",
    counties: ["Solano"],
    surroundingCities: ["Fairfield", "Vacaville", "Benicia", "Suisun City", "Dixon"],
    msa_region: "North Bay",
    coordinates: { latitude: "38.1041", longitude: "-122.2566" },
    address: { street: "555 Santa Clara St", zipCode: "94590" }
  },
  "Reading": {
    city: "Reading",
    state: "PA",
    counties: ["Berks"],
    surroundingCities: ["West Reading", "Wyomissing", "Muhlenberg", "Exeter", "Spring Township"],
    msa_region: "Greater Reading",
    coordinates: { latitude: "40.3356", longitude: "-75.9269" },
    address: { street: "815 Washington St", zipCode: "19601" }
  },
  "Brownsville-Harlingen": {
    city: "Brownsville",
    state: "TX",
    counties: ["Cameron"],
    surroundingCities: ["Harlingen", "San Benito", "Los Fresnos", "Port Isabel", "La Feria"],
    msa_region: "Rio Grande Valley",
    coordinates: { latitude: "25.9018", longitude: "-97.4975" },
    address: { street: "1001 E Elizabeth St", zipCode: "78520" }
  },
  "Florence": {
    city: "Florence",
    state: "SC",
    counties: ["Florence"],
    surroundingCities: ["Darlington", "Hartsville", "Lake City", "Marion", "Dillon"],
    msa_region: "Pee Dee Region",
    coordinates: { latitude: "34.1954", longitude: "-79.7626" },
    address: { street: "324 Evans St", zipCode: "29501" }
  },
  "Yakima": {
    city: "Yakima",
    state: "WA",
    counties: ["Yakima"],
    surroundingCities: ["Sunnyside", "Grandview", "Toppenish", "Union Gap", "Selah"],
    msa_region: "Yakima Valley",
    coordinates: { latitude: "46.6021", longitude: "-120.5059" },
    address: { street: "129 N 2nd St", zipCode: "98901" }
  },
  "Boulder": {
    city: "Boulder",
    state: "CO",
    counties: ["Boulder"],
    surroundingCities: ["Longmont", "Louisville", "Lafayette", "Superior", "Erie"],
    msa_region: "Front Range",
    coordinates: { latitude: "40.0150", longitude: "-105.2705" },
    address: { street: "1777 Broadway", zipCode: "80302" }
  },
  "Green Bay": {
    city: "Green Bay",
    state: "WI",
    counties: ["Brown", "Kewaunee", "Oconto"],
    surroundingCities: ["De Pere", "Ashwaubenon", "Bellevue", "Howard", "Suamico"],
    msa_region: "Greater Green Bay",
    coordinates: { latitude: "44.5192", longitude: "-88.0198" },
    address: { street: "100 N Jefferson St", zipCode: "54301" }
  },
  "Bremerton-Silverdale": {
    city: "Bremerton",
    state: "WA",
    counties: ["Kitsap"],
    surroundingCities: ["Silverdale", "Port Orchard", "Poulsbo", "Bainbridge Island", "Gig Harbor"],
    msa_region: "Kitsap Peninsula",
    coordinates: { latitude: "47.5673", longitude: "-122.6326" },
    address: { street: "239 4th St", zipCode: "98337" }
  },
  "Champaign-Urbana": {
    city: "Champaign",
    state: "IL",
    counties: ["Champaign", "Vermilion"],
    surroundingCities: ["Urbana", "Savoy", "Rantoul", "Mahomet", "Danville"],
    msa_region: "Greater Champaign",
    coordinates: { latitude: "40.1164", longitude: "-88.2434" },
    address: { street: "102 N Neil St", zipCode: "61820" }
  },
  "Laredo": {
    city: "Laredo",
    state: "TX",
    counties: ["Webb"],
    surroundingCities: ["Nuevo Laredo", "Rio Bravo", "El Cenizo", "Laredo Ranchettes", "Los Altos"],
    msa_region: "South Texas",
    coordinates: { latitude: "27.5306", longitude: "-99.4803" },
    address: { street: "1110 Houston St", zipCode: "78040" }
  },
  "Duluth": {
    city: "Duluth",
    state: "MN",
    counties: ["St. Louis"],
    surroundingCities: ["Superior", "Hermantown", "Cloquet", "Proctor", "Two Harbors"],
    msa_region: "North Shore",
    coordinates: { latitude: "46.7867", longitude: "-92.1005" },
    address: { street: "411 W 1st St", zipCode: "55802" }
  },
  "Erie": {
    city: "Erie",
    state: "PA",
    counties: ["Erie"],
    surroundingCities: ["Millcreek", "Harborcreek", "Fairview", "North East", "Girard"],
    msa_region: "Greater Erie",
    coordinates: { latitude: "42.1292", longitude: "-80.0851" },
    address: { street: "626 State St", zipCode: "16501" }
  },
  "South Bend-Mishawaka": {
    city: "South Bend",
    state: "IN",
    counties: ["St. Joseph"],
    surroundingCities: ["Mishawaka", "Granger", "Elkhart", "Osceola", "Niles"],
    msa_region: "Greater South Bend",
    coordinates: { latitude: "41.6764", longitude: "-86.2520" },
    address: { street: "227 W Jefferson Blvd", zipCode: "46601" }
  },
  "Evansville": {
    city: "Evansville",
    state: "IN",
    counties: ["Vanderburgh", "Warrick", "Gibson"],
    surroundingCities: ["Henderson", "Newburgh", "Mount Vernon", "Boonville", "Jasper"],
    msa_region: "Greater Evansville",
    coordinates: { latitude: "37.9716", longitude: "-87.5711" },
    address: { street: "1 NW Martin Luther King Jr Blvd", zipCode: "47708" }
  },
  "Toledo": {
    city: "Toledo",
    state: "OH",
    counties: ["Lucas", "Wood", "Fulton"],
    surroundingCities: ["Oregon", "Perrysburg", "Sylvania", "Maumee", "Bowling Green"],
    msa_region: "Greater Toledo",
    coordinates: { latitude: "41.6639", longitude: "-83.5552" },
    address: { street: "1 Government Center", zipCode: "43604" }
  },
  "Spartanburg": {
    city: "Spartanburg",
    state: "SC",
    counties: ["Spartanburg", "Cherokee", "Union"],
    surroundingCities: ["Greer", "Boiling Springs", "Duncan", "Landrum", "Woodruff"],
    msa_region: "Upstate South Carolina",
    coordinates: { latitude: "34.9496", longitude: "-81.9320" },
    address: { street: "145 W Broad St", zipCode: "29306" }
  },
  "Atlantic City": {
    city: "Atlantic City",
    state: "NJ",
    counties: ["Atlantic"],
    surroundingCities: ["Pleasantville", "Egg Harbor Township", "Galloway", "Absecon", "Brigantine"],
    msa_region: "Jersey Shore",
    coordinates: { latitude: "39.3643", longitude: "-74.4229" },
    address: { street: "1301 Bacharach Blvd", zipCode: "08401" }
  },
  "Clarksville": {
    city: "Clarksville",
    state: "TN",
    counties: ["Montgomery", "Stewart"],
    surroundingCities: ["Hopkinsville", "Oak Grove", "Fort Campbell", "Springfield", "Dover"],
    msa_region: "Greater Clarksville",
    coordinates: { latitude: "36.5298", longitude: "-87.3595" },
    address: { street: "1 Public Square", zipCode: "37040" }
  },
  "Columbia": {
    city: "Columbia",
    state: "MO",
    counties: ["Boone"],
    surroundingCities: ["Jefferson City", "Fulton", "Moberly", "Mexico", "Centralia"],
    msa_region: "Mid-Missouri",
    coordinates: { latitude: "38.9517", longitude: "-92.3341" },
    address: { street: "701 E Broadway", zipCode: "65201" }
  },
  "Kalamazoo-Portage": {
    city: "Kalamazoo",
    state: "MI",
    counties: ["Kalamazoo"],
    surroundingCities: ["Portage", "Battle Creek", "Mattawan", "Paw Paw", "Otsego"],
    msa_region: "Greater Kalamazoo",
    coordinates: { latitude: "42.2917", longitude: "-85.5872" },
    address: { street: "241 W South St", zipCode: "49007" }
  },
  "Fort Collins": {
    city: "Fort Collins",
    state: "CO",
    counties: ["Larimer"],
    surroundingCities: ["Loveland", "Greeley", "Windsor", "Timnath", "Wellington"],
    msa_region: "Front Range",
    coordinates: { latitude: "40.5853", longitude: "-105.0844" },
    address: { street: "300 Laporte Ave", zipCode: "80521" }
  },
  "Lubbock": {
    city: "Lubbock",
    state: "TX",
    counties: ["Lubbock"],
    surroundingCities: ["Levelland", "Plainview", "Slaton", "Post", "Snyder"],
    msa_region: "South Plains",
    coordinates: { latitude: "33.5779", longitude: "-101.8552" },
    address: { street: "1625 13th St", zipCode: "79401" }
  },
  "Lincoln": {
    city: "Lincoln",
    state: "NE",
    counties: ["Lancaster"],
    surroundingCities: ["Hickman", "Waverly", "Beatrice", "Seward", "York"],
    msa_region: "Greater Lincoln",
    coordinates: { latitude: "40.8136", longitude: "-96.7026" },
    address: { street: "555 S 10th St", zipCode: "68508" }
  },
  "Manchester-Nashua": {
    city: "Manchester",
    state: "NH",
    counties: ["Hillsborough"],
    surroundingCities: ["Nashua", "Derry", "Londonderry", "Merrimack", "Bedford"],
    msa_region: "Southern New Hampshire",
    coordinates: { latitude: "42.9956", longitude: "-71.4548" },
    address: { street: "1 City Hall Plaza", zipCode: "03101" }
  },
  "Winston-Salem": {
    city: "Winston-Salem",
    state: "NC",
    counties: ["Forsyth", "Davidson", "Davie"],
    surroundingCities: ["Kernersville", "Clemmons", "Lewisville", "Mocksville", "Lexington"],
    msa_region: "Piedmont Triad",
    coordinates: { latitude: "36.0999", longitude: "-80.2442" },
    address: { street: "101 N Main St", zipCode: "27101" }
  },
  "Gainesville": {
    city: "Gainesville",
    state: "FL",
    counties: ["Alachua"],
    surroundingCities: ["Ocala", "Lake City", "Starke", "Palatka", "Leesburg"],
    msa_region: "North Central Florida",
    coordinates: { latitude: "29.6516", longitude: "-82.3248" },
    address: { street: "200 E University Ave", zipCode: "32601" }
  },
  "Olympia-Tumwater": {
    city: "Olympia",
    state: "WA",
    counties: ["Thurston"],
    surroundingCities: ["Tumwater", "Lacey", "Yelm", "Shelton", "Centralia"],
    msa_region: "South Puget Sound",
    coordinates: { latitude: "47.0379", longitude: "-122.9007" },
    address: { street: "601 4th Ave E", zipCode: "98501" }
  },
  "Amarillo": {
    city: "Amarillo",
    state: "TX",
    counties: ["Potter", "Randall"],
    surroundingCities: ["Canyon", "Hereford", "Borger", "Pampa", "Dumas"],
    msa_region: "Texas Panhandle",
    coordinates: { latitude: "35.2220", longitude: "-101.8313" },
    address: { street: "509 S Johnson St", zipCode: "79101" }
  },
  "Bellingham": {
    city: "Bellingham",
    state: "WA",
    counties: ["Whatcom"],
    surroundingCities: ["Ferndale", "Lynden", "Blaine", "Everson", "Sedro-Woolley"],
    msa_region: "North Puget Sound",
    coordinates: { latitude: "48.7519", longitude: "-122.4787" },
    address: { street: "210 Lottie St", zipCode: "98225" }
  }, 
    "Santa Fe": {
    city: "Santa Fe",
    state: "NM",
    counties: ["Santa Fe"],
    surroundingCities: ["Espanola", "Los Alamos", "Taos", "Las Vegas", "Pecos"],
    msa_region: "Northern New Mexico",
    coordinates: { latitude: "35.6870", longitude: "-105.9378" },
    address: { street: "200 Lincoln Ave", zipCode: "87501" }
  },
  "Roanoke": {
    city: "Roanoke",
    state: "VA",
    counties: ["Roanoke", "Botetourt", "Franklin"],
    surroundingCities: ["Salem", "Vinton", "Cave Spring", "Hollins", "Rocky Mount"],
    msa_region: "Greater Roanoke",
    coordinates: { latitude: "37.2710", longitude: "-79.9414" },
    address: { street: "215 Church Ave SW", zipCode: "24011" }
  },
  "Fayetteville-Springdale-Rogers": {
    city: "Fayetteville",
    state: "AR",
    counties: ["Washington", "Benton"],
    surroundingCities: ["Springdale", "Rogers", "Bentonville", "Siloam Springs", "Centerton"],
    msa_region: "Northwest Arkansas",
    coordinates: { latitude: "36.0822", longitude: "-94.1719" },
    address: { street: "113 W Mountain St", zipCode: "72701" }
  },
  "Appleton": {
    city: "Appleton",
    state: "WI",
    counties: ["Outagamie", "Calumet", "Winnebago"],
    surroundingCities: ["Neenah", "Menasha", "Kaukauna", "Little Chute", "Grand Chute"],
    msa_region: "Fox Cities",
    coordinates: { latitude: "44.2619", longitude: "-88.4154" },
    address: { street: "100 N Appleton St", zipCode: "54911" }
  },
  "Myrtle Beach-Conway-North Myrtle Beach": {
    city: "Myrtle Beach",
    state: "SC",
    counties: ["Horry"],
    surroundingCities: ["Conway", "North Myrtle Beach", "Surfside Beach", "Murrells Inlet", "Georgetown"],
    msa_region: "Grand Strand",
    coordinates: { latitude: "33.6891", longitude: "-78.8867" },
    address: { street: "937 Broadway St", zipCode: "29577" }
  },
  "Chico": {
    city: "Chico",
    state: "CA",
    counties: ["Butte"],
    surroundingCities: ["Paradise", "Oroville", "Gridley", "Durham", "Biggs"],
    msa_region: "Northern Sacramento Valley",
    coordinates: { latitude: "39.7285", longitude: "-121.8375" },
    address: { street: "411 Main St", zipCode: "95928" }
  },
  "Lafayette-West Lafayette": {
    city: "Lafayette",
    state: "IN",
    counties: ["Tippecanoe"],
    surroundingCities: ["West Lafayette", "Battle Ground", "Dayton", "Shadeland", "Otterbein"],
    msa_region: "Greater Lafayette",
    coordinates: { latitude: "40.4167", longitude: "-86.8753" },
    address: { street: "20 N 6th St", zipCode: "47901" }
  },
  "Redding": {
    city: "Redding",
    state: "CA",
    counties: ["Shasta"],
    surroundingCities: ["Anderson", "Shasta Lake", "Cottonwood", "Palo Cedro", "Burney"],
    msa_region: "Northern California",
    coordinates: { latitude: "40.5865", longitude: "-122.3917" },
    address: { street: "777 Cypress Ave", zipCode: "96001" }
  },
  "Hickory-Lenoir-Morganton": {
    city: "Hickory",
    state: "NC",
    counties: ["Catawba", "Burke", "Caldwell"],
    surroundingCities: ["Lenoir", "Morganton", "Conover", "Newton", "Granite Falls"],
    msa_region: "Catawba Valley",
    coordinates: { latitude: "35.7342", longitude: "-81.3445" },
    address: { street: "76 N Center St", zipCode: "28601" }
  },
  "Medford": {
    city: "Medford",
    state: "OR",
    counties: ["Jackson"],
    surroundingCities: ["Ashland", "Grants Pass", "Central Point", "Eagle Point", "Phoenix"],
    msa_region: "Rogue Valley",
    coordinates: { latitude: "42.3265", longitude: "-122.8756" },
    address: { street: "411 W 8th St", zipCode: "97501" }
  },
  "Bend": {
    city: "Bend",
    state: "OR",
    counties: ["Deschutes"],
    surroundingCities: ["Redmond", "Sisters", "La Pine", "Prineville", "Sunriver"],
    msa_region: "Central Oregon",
    coordinates: { latitude: "44.0582", longitude: "-121.3153" },
    address: { street: "710 NW Wall St", zipCode: "97701" }
  },
  "Eau Claire": {
    city: "Eau Claire",
    state: "WI",
    counties: ["Eau Claire", "Chippewa"],
    surroundingCities: ["Altoona", "Chippewa Falls", "Menomonie", "Lake Hallie", "Augusta"],
    msa_region: "Chippewa Valley",
    coordinates: { latitude: "44.8113", longitude: "-91.4985" },
    address: { street: "203 S Farwell St", zipCode: "54701" }
  },
  "Flagstaff": {
    city: "Flagstaff",
    state: "AZ",
    counties: ["Coconino"],
    surroundingCities: ["Sedona", "Williams", "Page", "Winslow", "Tuba City"],
    msa_region: "Northern Arizona",
    coordinates: { latitude: "35.1983", longitude: "-111.6513" },
    address: { street: "211 W Aspen Ave", zipCode: "86001" }
  },
  "Reno": {
    city: "Reno",
    state: "NV",
    counties: ["Washoe"],
    surroundingCities: ["Sparks", "Carson City", "Fernley", "Fallon", "Virginia City"],
    msa_region: "Greater Reno",
    coordinates: { latitude: "39.5296", longitude: "-119.8138" },
    address: { street: "1 E 1st St", zipCode: "89501" }
  },
  "Binghamton": {
    city: "Binghamton",
    state: "NY",
    counties: ["Broome", "Tioga"],
    surroundingCities: ["Johnson City", "Endicott", "Vestal", "Owego", "Conklin"],
    msa_region: "Greater Binghamton",
    coordinates: { latitude: "42.0987", longitude: "-75.9180" },
    address: { street: "38 Hawley St", zipCode: "13901" }
  },
  "Sioux Falls": {
    city: "Sioux Falls",
    state: "SD",
    counties: ["Minnehaha", "Lincoln"],
    surroundingCities: ["Brandon", "Harrisburg", "Tea", "Lennox", "Dell Rapids"],
    msa_region: "Greater Sioux Falls",
    coordinates: { latitude: "43.5446", longitude: "-96.7311" },
    address: { street: "224 W 9th St", zipCode: "57104" }
  },
  "Tuscaloosa": {
    city: "Tuscaloosa",
    state: "AL",
    counties: ["Tuscaloosa"],
    surroundingCities: ["Northport", "Duncanville", "Holt", "Brookwood", "Coaling"],
    msa_region: "Greater Tuscaloosa",
    coordinates: { latitude: "33.2098", longitude: "-87.5692" },
    address: { street: "2201 University Blvd", zipCode: "35401" }
  },
  "Billings": {
    city: "Billings",
    state: "MT",
    counties: ["Yellowstone"],
    surroundingCities: ["Laurel", "Lockwood", "Shepherd", "Red Lodge", "Columbus"],
    msa_region: "Greater Billings",
    coordinates: { latitude: "45.7833", longitude: "-108.5007" },
    address: { street: "210 N 27th St", zipCode: "59101" }
  },
  "Rocky Mount": {
    city: "Rocky Mount",
    state: "NC",
    counties: ["Nash", "Edgecombe"],
    surroundingCities: ["Tarboro", "Nashville", "Whitakers", "Sharpsburg", "Pinetops"],
    msa_region: "Twin Counties",
    coordinates: { latitude: "35.9382", longitude: "-77.7905" },
    address: { street: "331 S Franklin St", zipCode: "27804" }
  },
  "Greeley": {
    city: "Greeley",
    state: "CO",
    counties: ["Weld"],
    surroundingCities: ["Evans", "Windsor", "Eaton", "Johnstown", "Milliken"],
    msa_region: "Northern Colorado",
    coordinates: { latitude: "40.4233", longitude: "-104.7091" },
    address: { street: "1000 10th St", zipCode: "80631" }
  },
  "Iowa City": {
    city: "Iowa City",
    state: "IA",
    counties: ["Johnson"],
    surroundingCities: ["Coralville", "North Liberty", "Tiffin", "Solon", "West Branch"],
    msa_region: "Greater Iowa City",
    coordinates: { latitude: "41.6611", longitude: "-91.5302" },
    address: { street: "410 E Washington St", zipCode: "52240" }
  },
  "Fargo": {
    city: "Fargo",
    state: "ND",
    counties: ["Cass", "Clay"],
    surroundingCities: ["Moorhead", "West Fargo", "Dilworth", "Horace", "Mapleton"],
    msa_region: "Red River Valley",
    coordinates: { latitude: "46.8772", longitude: "-96.7898" },
    address: { street: "225 4th St N", zipCode: "58102" }
  },
  "Charleston": {
    city: "Charleston",
    state: "WV",
    counties: ["Kanawha", "Putnam"],
    surroundingCities: ["South Charleston", "St. Albans", "Nitro", "Dunbar", "Cross Lanes"],
    msa_region: "Greater Charleston",
    coordinates: { latitude: "38.3498", longitude: "-81.6326" },
    address: { street: "501 Virginia St E", zipCode: "25301" }
  },
  "Burlington": {
    city: "Burlington",
    state: "VT",
    counties: ["Chittenden"],
    surroundingCities: ["South Burlington", "Essex", "Colchester", "Williston", "Winooski"],
    msa_region: "Greater Burlington",
    coordinates: { latitude: "44.4759", longitude: "-73.2121" },
    address: { street: "149 Church St", zipCode: "05401" }
  },
  "Macon-Bibb County": {
    city: "Macon",
    state: "GA",
    counties: ["Bibb"],
    surroundingCities: ["Warner Robins", "Perry", "Fort Valley", "Byron", "Centerville"],
    msa_region: "Greater Macon",
    coordinates: { latitude: "32.8407", longitude: "-83.6324" },
    address: { street: "700 Poplar St", zipCode: "31201" }
  },
  "Columbia": {
    city: "Columbia",
    state: "MO",
    counties: ["Boone"],
    surroundingCities: ["Jefferson City", "Fulton", "Moberly", "Mexico", "Centralia"],
    msa_region: "Mid-Missouri",
    coordinates: { latitude: "38.9517", longitude: "-92.3341" },
    address: { street: "701 E Broadway", zipCode: "65201" }
  },
  "Killeen-Temple": {
    city: "Killeen",
    state: "TX",
    counties: ["Bell", "Coryell"],
    surroundingCities: ["Temple", "Harker Heights", "Copperas Cove", "Belton", "Fort Hood"],
    msa_region: "Central Texas",
    coordinates: { latitude: "31.1171", longitude: "-97.7278" },
    address: { street: "101 N College St", zipCode: "76541" }
  },
  "Lansing-East Lansing": {
    city: "Lansing",
    state: "MI",
    counties: ["Ingham", "Eaton", "Clinton"],
    surroundingCities: ["East Lansing", "Okemos", "Holt", "Grand Ledge", "Williamston"],
    msa_region: "Greater Lansing",
    coordinates: { latitude: "42.7325", longitude: "-84.5555" },
    address: { street: "124 W Michigan Ave", zipCode: "48933" }
  },
  "Springfield": {
    city: "Springfield",
    state: "MO",
    counties: ["Greene", "Christian"],
    surroundingCities: ["Nixa", "Ozark", "Republic", "Battlefield", "Willard"],
    msa_region: "Greater Springfield",
    coordinates: { latitude: "37.2089", longitude: "-93.2923" },
    address: { street: "840 Boonville Ave", zipCode: "65802" }
  }
};