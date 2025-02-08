import json

# Load GeoJSON file
with open("ski_areas.geojson", "r") as file:
    geojson_data = json.load(file)

geojson_data.keys()


Whistler_ski_resorts = []

for feature in geojson_data['features']:
    # Check if 'properties' and the necessary nested keys exist before trying to access them
    properties = feature.get('properties', None)
    if properties:
        location = properties.get('location', None)
        if location:
            localized = location.get('localized', None)
            if localized:
                en = localized.get('en', None)
                if en:
                    locality = en.get('locality', None)
                    # Check if the locality is 'Whistler'
                    if locality == 'Whistler':
                        Whistler_ski_resorts.append(feature)  # Append the feature or any other data you need

# Check how many Whistler resorts were found
print(f"Found {len(Whistler_ski_resorts)} ski resorts in Whistler.")


filtered_geojson = Whistler_ski_resorts[0]

with open("whistler_ski_resorts.geojson", "w") as outfile:
    json.dump(filtered_geojson, outfile, indent=4)



# Load GeoJSON file
with open("runs.geojson", "r") as file:
    runs = json.load(file)


whistler_runs = []

# Loop through each feature in the dataset
for feature in runs["features"]:
    # Check if locality is "Whistler"
    if feature.get("properties", {}).get("location", {}).get("locality") == "Whistler":
        whistler_runs.append(feature)

# Print the results
print(whistler_features)