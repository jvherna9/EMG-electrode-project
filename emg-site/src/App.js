import { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("problem");

  const tabs = [
    { id: "problem", label: "Problem" },
    { id: "test", label: "Experimental Setup" },
    { id: "circuit", label: "Circuit" },
    { id: "videos", label: "Videos" },
    { id: "results", label: "Results" },
    { id: "limitations", label: "Limitations" },
  ];

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={{ ...styles.title, marginBottom: "30px" }}>Optimizing EMG Signals for Better Prosthetic Performance ᕙ(⇀‸↼‶)ᕗ</h1>
    
        <p style={styles.subtitle}>
          Evaluating how electrode density impacts EMG signal quality and processing⚡
        </p>
      </header>

      <nav style={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              ...styles.tabButton,
              ...(activeTab === tab.id ? styles.activeTab : {}),
            }}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main style={styles.card}>
        {activeTab === "problem" && (
          <section>
            <h2> ⚛ Problem ⚛</h2>
            <p>
              Modern upper-limb prosthetic systems rely on surface Electromyography (EMG) 
              signal to interpret muscle activity and control movement. However, these 
              systems typically use only a limited number of 2 electrodes, which restricts
              their ability to capture accurate signals from muscle groups.
            </p>
            <p>
              This limited signal capture results in noisy and incomplete data, leading to 
              inaccurate movement classification and reduced control accuracy. As a result, 
              prosthetic devices often perform unreliably and can be difficult for users
              to control.
            </p>
            <p>
              This project investigates whether increasing the electrodes on a particular 
              muscle group imrpoves the EMG signal quality and enables more accurage and 
              reliable prosthetic control. 
            </p>
            <div style={{ textAlign: "center" }}>
              <img src="/thinkingcat.jpg" alt="cat" width="200" />
            </div>
          </section>
        )}

        {activeTab === "test" && (
          <section>
            <h2>🧪 Test Format</h2>
            <p>We tested three electrode configurations:</p>
            <ul>
              <li>2 electrodes</li>
              <li>4 electrodes</li>
              <li>6 electrodes</li>
            </ul>
            <p>Electrode Placement:</p>
            <ul>
              <li>Electrodes were placed along the biceps brachii miscle, with a reference
              electrode near the elbow to stabilize the signal.</li>
                </ul>
            <p>For each setup, we recorded:</p>
            <ul>
              <li>Rest</li>
              <li>Light contraction</li>
              <li>Strong contraction</li>
            </ul>
            <p>
              Signals were collected using LabVIEW and NI myDAQ, then processed and 
              analyzed in MATLAB.
            </p>
          </section>
        )}

        {activeTab === "circuit" && (
          <section>
            <h2>🔌 Circuit Explanation</h2>
            <div style={styles.grid}>
              <InfoBox
                title="Instrumentation Amplifier"
                text="Measures small voltage differences from the electrodes while reducing common-mode noise, such as electrical inteference. This stage is critical for capturing clean EMG signals from muscle activity."
              />
             <InfoBox
                title="Band-Pass Filter"
                text="Filters the EMG signal to remove low-frequency drift (motion artifacts) and high-frequency noise. Ensures only relevant muscle signal frequencies are preserved."
              />
              <InfoBox
                title="Inverting Amplifier"
                text="Amplifies the filtered EMG signal to a measurable volage range so it can be clearly recorded by the myDAQ. The inverting amplifier provides controlled gain based on resistor values."
              />
                
            </div>
              <ImageBox title="Band-Pass Filter Circuit" src="/Bandpassfilter.png" text="Figure 1: A hand-drawn circuit of a Low-Band Filter and High-Pass Active filter. On the left, the Low-Band Filter contains a capacitor value of 10 nF and resistor values of 51 KΩ and 100 KΩ. The Low-Band Filter has an overall gain of 2.  The circuit contains a 0.22 nF capacitor and resistors with values of 2.2 KΩ and 22 KΩ. The op-amp has a gain of 10. Overall, the Band-Pass-Filter has a gain of 20."/>
          </section>
        )}

        {activeTab === "videos" && (
          <section>
            <h2>👾 LAB VIDEOS</h2>
            <p>
              Our EMG Project videos ♡.
            </p>

            <div style={{ textAlign: "center" }}>
              <h3>Circuit Setup Video</h3>
              <p>Breadboard, electrodes, myDAQ connection, and LabVIEW setup.</p>

              <video controls muted style={{ width: "300px" }}>
                <source src="/EMGcircuit.mp4" type="video/mp4" />
              </video>
            </div>

            <VideoBox
              title="Data Collection Video"
              src="/data-collection.mp4"
              description="Show how rest, light contraction, and strong contraction trials were recorded."
            />

        
          </section>
        )}

        {activeTab === "results" && (
          <section>
            <h2>📶 Results</h2>
            <p>
              The results show that electrode count significantly impacts EMG signal quality. While trends varied slightly
              between subjcts, an intermediate electrode configuration of 4 provided the most consistent reliable signal 
              peformance. 
            </p>

            <div style={styles.grid}>
              <InfoBox
                title="Female A & B"
                text="Female A showed more variability. The signal dropped at 4 electrodes and increased again at 6 electrodes, likely due to inconsistent contractions or electrode placement. Female B showed a clearer improvement at 4 electrodes, with stronger RMS and peak-to-peak signal values, indicating better signal quality."
              />
              <InfoBox
                title="Male A & B"
                text="Both male subjects showed a more consistent trend compared to the female data. Signal-to-noise ratio improved from 2 to 4 electrodes, indicating better signal quality clarity. RMS and peak-to-peak values generally decreased as electrode count increased, suggesting interference. Overall, 4 electrodes provided the best balance between signal quality and reliability."
              />
            </div>

            <h3>Key Graphs</h3>
            <p>
              Female & Male Results.
            </p>

            <ImageBox title="SNR vs Electrode Count" src="/SNRfemale.png" src2="/SNRmale.png"/>
            <ImageBox title="Normalized RMS" src="/NormalizedRMSFemale.png" src2="/MaleRMS.png"/>
            <ImageBox title="Rest-to-Contraction Difference" src="/ResttoContractionFemale.png" src2="/RestFullMale.png"/>
          </section>
        )}

        {activeTab === "limitations" && (
          <section>
            <h2>⚠️ Limitations & Future Work</h2>
            <ul>
              <li>Only two female and male subjects were analyzed.</li>
              <li>Female A & Male A had less consistent contractions, which affected the data.</li>
              <li>Electrode placement may have changed signal quality.</li>
              <li>More subjects are needed to confirm the trend.</li>
              <li>Future tests should standardize contraction strength and electrode placement.</li>
            </ul>

            <h2>💡 Why This Matters</h2>
            <p>
              This project provides useful information for prosthetics and muscle-controlled
              devices because EMG systems need clean and reliable signals to interpret
              muscle activation.
            </p>
          </section>
        )}
      </main>

      <footer style={styles.footer}>
        <p>EMG Electrode Sensitivity Project • BME 370</p>
        <p style={{ marginTop: "10px" }}>
          Dayra Miles 𖹭, Deepashree Domlur Raghavendra ☘, Jhoana Hernandez 𓇼
        </p>
      </footer>
    </div>
  );
}

function InfoBox({ title, text }) {
  return (
    <div style={styles.infoBox}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function VideoBox({ title, src, description }) {
  return (
    <div style={styles.mediaBox}>
      <h3>{title}</h3>
      <p>{description}</p>
      <video controls style={styles.video}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

function ImageBox({ title, src }) {
  return (
    <div style={{ ...styles.mediaBox, textAlign: "left" }}>
      <h3>{title}</h3>

      <img
        src={src}
        alt={title}
        style={{
          width: "50%",          // controls size
          maxWidth: "500px",     // prevents it from getting huge
          height: "auto",
          borderRadius: "15px",
          border: "2px solid #ffcce5",
          marginTop: "10px"
        }}
      />
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #fff0f7, #ffffff)",
    color: "#4a1733",
    fontFamily: "Arial, sans-serif",
    padding: "30px",
  },
  header: {
    textAlign: "center",
    padding: "35px 20px",
    backgroundColor: "#ffcce5",
    borderRadius: "25px",
    boxShadow: "0 8px 20px rgba(255, 105, 180, 0.25)",
  },
  title: {
    fontSize: "42px",
    marginBottom: "10px",
    color: "#b0005a",
  },
  subtitle: {
    fontSize: "18px",
    color: "#6b2447",
  },
  tabs: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    margin: "25px 0",
  },
  tabButton: {
    padding: "12px 18px",
    borderRadius: "999px",
    border: "2px solid #ff8fc7",
    backgroundColor: "white",
    color: "#b0005a",
    fontWeight: "bold",
    cursor: "pointer",
  },
  activeTab: {
    backgroundColor: "#ff69b4",
    color: "white",
  },
  card: {
    maxWidth: "1000px",
    margin: "0 auto",
    backgroundColor: "white",
    borderRadius: "25px",
    padding: "30px",
    boxShadow: "0 8px 25px rgba(255, 105, 180, 0.2)",
    lineHeight: "1.7",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "18px",
    marginTop: "20px",
  },
  infoBox: {
    backgroundColor: "#fff0f7",
    border: "2px solid #ffcce5",
    borderRadius: "20px",
    padding: "20px",
  },
  mediaBox: {
    backgroundColor: "#fff0f7",
    border: "2px solid #ffcce5",
    borderRadius: "20px",
    padding: "20px",
    marginTop: "20px",
  },
  video: {
    width: "100%",
    maxHeight: "500px",
    borderRadius: "15px",
    marginTop: "10px",
    backgroundColor: "#f8c7dd",
  },
  image: {
    width: "100%",
    borderRadius: "15px",
    marginTop: "10px",
    border: "2px solid #ffcce5",
  },
  footer: {
    textAlign: "center",
    marginTop: "35px",
    color: "#8a3a5f",
  },
};

export default App;
