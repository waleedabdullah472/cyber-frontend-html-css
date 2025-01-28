import React from "react";

const Graph = () => {
  const totalAttendees = 6579;
  const presentAttendees = 650;
  const checkedOutAttendees = 650;
  const canceledAttendees = 650;

  return (
    <div style={styles.container}>
      <div style={styles.info}>
        <strong>Activity Tracking</strong>
      </div>
      <div style={styles.progressBar}>
        <div style={{ ...styles.progressSegment, ...styles.green, width: "70%" }}>
          <span style={styles.progressText}>70.04%</span>
        </div>
        <div style={{ ...styles.progressSegment, ...styles.yellow, width: "5%" }}></div>
        <div style={{ ...styles.progressSegment, ...styles.red, width: "25%" }}></div>
      </div>
      <div style={styles.info}>
        <strong>Total Attendees:</strong> {totalAttendees}
      </div>
      <div style={styles.details}>
        <div style={{ ...styles.detailItem, ...styles.present }}>
          <strong>Present:</strong> <br />
          {presentAttendees}
        </div>
        <div style={{ ...styles.detailItem, ...styles.checkedOut }}>
          <strong>Checked out:</strong> <br />
          {checkedOutAttendees}
        </div>
        <div style={{ ...styles.detailItem, ...styles.canceled }}>
          <strong>Canceled:</strong> <br />
          {canceledAttendees}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "500px", 
    margin: "0 auto", 
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    boxSizing: "border-box", 
  },
  info: {
    marginBottom: "20px",
    fontSize: "16px",
  },
  progressBar: {
    position: "relative",
    height: "50px",
    background: "#f5f5f5",
    borderRadius: "8px",
    overflow: "hidden",
    margin: "20px 0", 
    display: "flex",
  },
  progressSegment: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    color: "white",
    fontSize: "14px",
    fontWeight: "bold",
    paddingRight: "10px",
    height: "100%",
  },
  green: {
    backgroundColor: "#6BD6A7",
  },
  yellow: {
    backgroundColor: "#F6E78E",
  },
  red: {
    backgroundColor: "#F26C6C",
  },
  progressText: {
    position: "absolute",
    right: "10px",
    color: "white",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
   
  },
  detailItem: {
    textAlign: "center",
    padding: "10px",
    borderRadius: "8px",
    fontWeight: "bold",
    width: "30%",
    marginBottom: "10px",
  },
  present: {
    backgroundColor: "#E8F9EF",
    color: "#4CAF50",
  },
  checkedOut: {
    backgroundColor: "#FFF6DA",
    color: "#FBC02D",
  },
  canceled: {
    backgroundColor: "#FDECEC",
    color: "#F44336",
  },

 
  '@media screen and (max-width: 768px)': {
    container: {
      width: "90%", 
      padding: "15px",
    },
    progressBar: {
      height: "40px", 
    },
    progressText: {
      fontSize: "12px", 
    },
    details: {
      flexDirection: "column", 
      alignItems: "center",
    },
    detailItem: {
      width: "80%",
      marginBottom: "15px",
    },
  },

  '@media screen and (max-width: 480px)': {
    container: {
      width: "100%", 
      padding: "10px", 
    },
    progressBar: {
      height: "35px", 
    },
    progressText: {
      fontSize: "10px", 
    },
    details: {
      flexDirection: "column", 
      alignItems: "center", 
    },
    detailItem: {
      width: "100%", 
      marginBottom: "10px", 
    },
  },
};

export default Graph;
