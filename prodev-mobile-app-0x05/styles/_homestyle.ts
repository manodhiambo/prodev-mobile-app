import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  searchGroup: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingTop: 60,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  searchControl: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  searchButton: {
    backgroundColor: "#34967C",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 15,
  },
  filterContainer: {
    alignItems: "center",
    width: 80,
    height: 52,
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  paginationContainer: {
    alignItems: "center",
    paddingVertical: 20,
    marginBottom: 20,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export { styles };
