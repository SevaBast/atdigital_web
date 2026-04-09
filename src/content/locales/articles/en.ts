import type { Article } from "@/content/types";

// ═══════════════════════════════════════════════════════════════
// 🇬🇧  ENGLISH — Academy articles
// ═══════════════════════════════════════════════════════════════

export const enArticles: Article[] = [
  {
    id: "process-mining",
    title: "New Approach to the Analysis of Manufacturing Processes with the Support of Data Science",
    description: "The article introduces process mining as an innovative method for enterprise data analysis. It proposes and practically validates a proprietary methodology on real manufacturing data using Fluxicon Disco software.",
    author: "Krajčovič, M., Bastiuchenko, V., Furmannová, B., Botka, M., Komačka, D.",
    date: "2024-02-23",
    readingTime: 7,
    tags: ["Process Mining", "Data Science", "Manufacturing Processes", "Optimization"],
    pdfUrl: "https://drive.google.com/file/d/1plTJ-KQHmIP5DnirVvnKN6y6fB0QpTdj/view",
    content: `## Introduction to Process Mining
Process mining is an innovative approach to enterprise data analysis that enables the systematic extraction, analysis, and visualization of digital traces within information systems. This technique establishes connections within data and forms complex process maps that serve as a foundation for the analysis, interpretation, and enhancement of internal business processes.

In today's environment, where the dynamics and competition in manufacturing are continually increasing, it is essential to apply advanced analytical methods before implementing any process changes. Traditional analytical methods may be limited in their ability to process large volumes of data and handle the complexity of modern manufacturing systems.

## What is Process Mining
Process mining is a new research area that combines information sciences with analytical statistical technologies. It merges statistics, computer science, and mathematical computations to determine relationships between key factors such as utilization, timing parameters, and others. The objective is the automatic construction of a process model based on recorded events from event logs available in information systems (ERP, MES).

The fundamental input is an event log — a record of sequential transactions, events, or behaviors that occurred in a process. Each event log must contain at least three elements: Case ID (a unique process identifier), Activity (a step or action in the process), and Timestamp (indicating when the activity took place).

## Process Mining Algorithms
The foundational algorithm is the α-miner (α-algorithm), which reconstructs causality from a set of event sequences. It transforms an event log into a workflow net (Petri net) based on the relationships between activities. These relationships include: Direct Succession, Causality, Parallel, and Choice.

Beyond the α-algorithm, other algorithms exist: the heuristic miner (generates models based on frequency of occurrences), the fuzzy miner (a heuristic approach suitable for noisy data), and the Genetic Algorithm miner (GA miner). The key factors for process discovery are the balance between fitness, precision, generalization, and simplicity.

## Proprietary Methodology for Manufacturing Process Analysis
The authors proposed a 15-step methodology for analyzing manufacturing processes using process mining:

1. Defining KPIs (work-in-progress, lead times, order lifecycle, rework, capacities)

2. Setting analysis goals and questions

3. Selecting data sources (process logs, system records, sensor data, identifier data)

4. Data extraction and cleaning (identification, extraction, cleaning, normalization)

5. Data transformation (attribute transformation, aggregation, time and identifier normalization)

6. Decision block — verifying the format for import

7. Linking specific attributes with data (Case ID, Activity, Timestamp)

8. Data processing using software (algorithmic computations, process maps)

9. Decision block — verifying processing success

10. Process map analysis (time, source, and step filtering)

11. Data validation (comparison with historical data, statistical verification, expert evaluation)

12. Decision block — verifying match with the real model

13. Statistical analysis (time series, regression analysis, variance evaluation)

14. Detailed case analysis

15. Defining improvements and interpreting results

## Case Study
The methodology was validated on real data from a European manufacturing enterprise specializing in large welded steel structures. Data were extracted from the company's ERP system and contained information about machines, equipment, handling, preparation, and machining.

Raw data were transformed and imported into the Fluxicon Disco software. Key attributes were assigned: timestamp, article number, production order, machine ID, and operation numbers of the technological procedure. The output consisted of frequency and performance process maps.

## Key Findings
The analysis revealed critical orders and equipment: order A143503-1218326 (10 activities, total duration of 29 days and 5 hours) and order C402200-7155104 (11 activities, 25 days and 18 hours). Machines 999201 and 942101 accounted for more than 36% of the entire manufacturing process.

Identified problems included long handling times, long processing and retooling times, and a long rework time on machine 942101 (31.5 days). Based on equipment segmentation, three groups were proposed for a cellular production arrangement aimed at shortening lead times.

## Achieved Results
In the model example, a reduction in the time required for production cycles by 15% and an improvement in resource utilization by 20% were achieved. This resulted in increased process efficiency and a potential reduction in the required number of workers by up to 10%. By reducing the main identified problems (reducing WIP and shortening lead times), there is a potential to increase the efficiency of ongoing processes by at least 30%.

## Limitations of the Method
Process mining also has its limitations: dependency on the quality of input data, time-consuming processing of large data volumes, complexity of result interpretation, limited predictive capacity, and the necessity of selecting the correct time period for analysis. For some organizations, alternative methods such as Six Sigma or Lean may be more suitable.

## Conclusion
Process mining provides significant advantages in the analysis and optimization of manufacturing processes. It enables the discovery of hidden patterns and variability, identification of inefficient steps, increased process transparency, and support for data-driven decision-making. Collaboration between academia and industry is key to the successful application of these methods.`,
}
];
