# TODO: download soruce from url, unpack to temp file
jq '[.[] | select(.country == "ES") | {label: "\(.name) (\(.coord.lon),\(.coord.lat))", id: .id}] | sort_by(.label)' locations.list.min.json > ../src/data/spainLocations.json
# TODO: remove temp file
