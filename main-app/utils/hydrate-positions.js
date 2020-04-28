
//take an array of positionIds and an array of all positions and return an array positions 
export default function hydratePositions(positionIds, positionList) {
	return positionList.filter(position => positionIds.includes(position._id))
}