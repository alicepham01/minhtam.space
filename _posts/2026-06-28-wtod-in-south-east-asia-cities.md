---
layout: post
title: "WTOD in South East Asia Cities"
date: 2026-06-28
category: research
description: A Water Transit-Oriented Development framework for Ho Chi Minh City, integrating inland waterway networks with urban form and land use accessibility analysis.
tags: [urbanism, TOD, Canal Oriented Development, Southeast Asia]
image:
---

## Water Transit-Oriented Development in Ho Chi Minh City: An Integrated Urban Model for Evaluating Inland Waterway Networks and Urban Form

### Abstract

Inland waterway transport remains an underexplored dimension of transit-oriented development (TOD) research, particularly in rapidly urbanising deltaic cities where water networks form a structurally embedded layer of the urban fabric. This paper proposes a Water Transit-Oriented Development (WTOD) framework for Ho Chi Minh City (HCMC), Vietnam — a metropolitan context defined by an extensive canal system yet currently served by only a single operational water bus line.

Drawing methodological inspiration from Integrated Urban Models (IUM) developed for multimodal rail-street network analysis, this study pursues two principal aims: (1) to evaluate the spatial influence of the inland waterway network on urban form and land use accessibility, and (2) to develop a **Water Multimodal Network Model (WMNM)** that unifies the street network, public transport network, and inland water transport routes within a single integrated analytical framework.

The WMNM is constructed by merging an OpenStreetMap (OSM)-derived Street Network Model (SNM) with waterway route geometry and proposed pier node locations derived from prior planning research, intermediated through station nodes in a manner analogous to rail-based IUM frameworks. Spatial network analyses — incorporating metric, topological, and travel-time distance measures — are applied alongside land use Point of Interest (POI) data and census/socio-economic datasets to assess network accessibility at both corridor and neighbourhood scales.

**Keywords:** Water Transit-Oriented Development (WTOD), Inland Waterway Transport, Multimodal Network Model, Urban Accessibility, Ho Chi Minh City, Space Syntax, GIS

---

## 1. Introduction and Research Background

Ho Chi Minh City occupies a hydrologically complex urban landscape shaped by the Saigon River and an extensive network of inland canals. Despite this intrinsic relationship between urban settlement and waterways, transport planning in HCMC has historically prioritised road-based infrastructure, leaving the waterway network largely underutilised as a public transport corridor. The city's sole operational water bus line — Route 01 along the Saigon River between Bach Dang Pier and Linh Dong — represents a nascent but isolated intervention in what could constitute a broader multimodal transit network.

This disconnect between the physical waterway structure and the urban transport system presents a significant research gap. Existing TOD literature predominantly centres on rail-based rapid transit (Cervero & Kockelman, 1997; Ewing & Cervero, 2010), while waterway-oriented development frameworks remain rare, especially in Southeast Asian urban contexts. The spatial relationship between water transit infrastructure, urban morphology, and socio-economic activity in HCMC is therefore both understudied and of considerable planning relevance.

This paper addresses this gap by adapting the IUM framework — a GIS-based methodology integrating multimodal network models with land use and performance data — to incorporate inland waterway transport as a primary network layer.

---

## 2. Research Aims and Questions

**Aim 1:** Evaluate the spatial impact of the inland waterway network on urban form and land use accessibility in HCMC.

**Aim 2:** Develop a Water Multimodal Network Model (WMNM) integrating street networks, public transport routes, and inland water transport routes into a unified analytical model.

The study is guided by the following research questions:

- **RQ1:** How does the existing and proposed water bus network influence network accessibility across different urban zones in HCMC?
- **RQ2:** What is the spatial relationship between pier node locations, land use distribution, and socio-economic activity at the neighbourhood scale?
- **RQ3:** To what extent can a WMNM framework capture the multimodal accessibility potential of a waterway-dominated urban transport context?

---

## 3. Methodology

The methodology replicates and extends the IUM Development Framework across four sequential phases.

### Phase 1 — Data Acquisition

Three parallel data streams are assembled:

| Data Type | Dataset | Source |
|---|---|---|
| Street Network | OSM Roads | OpenStreetMap (VGI) |
| Water Transport Network | OSM Waterways + Water Bus Route 01 Geometry | OSM / HCMC Authority |
| Water Bus Schedule | GTFS (Route 01, HCMC) | HCMC Department of Transport |
| Pier / Station Nodes | Proposed pier node locations | Prior planning research |
| Land Use POI | OSM POIs (amenities, transport, services) | OpenStreetMap |
| Performance Data | Census data, socio-economic indicators | General Statistics Office Vietnam |

### Phase 2 — Spatial Model Pre-Processing: Building the WMNM

The WMNM is the core analytical innovation of this framework, constructed in direct analogy to the rail-street MNM described in IUM methodology:

1. **Street Network Model (SNM):** OSM Roads data is cleaned, simplified, and represented as a graph network with road classification attributes.
2. **Water Transport Network Model:** OSM waterway geometry and GTFS schedule data for the operational water bus line are processed and geometrically integrated into a GIS platform. Stop-time information is incorporated to enable travel-time weighted analysis.
3. **Pier Node Integration:** Proposed pier station nodes act as the critical intermediary connecting the SNM to the water transport network, forming the multimodal linkage analogous to rail station nodes in the IUM framework.
4. **Road and Waterway Classification:** Network segments are classified by transport mode and speed to support multimodal routing and accessibility calculations.
5. **Spatial Join / Data Link:** Land use POI data and socio-economic datasets are georeferenced and linked to the WMNM via spatial join operations.

### Phase 3 — Spatial Analysis

The integrated WMNM enables the following analytical techniques:

- **Metric Distance Analysis:** Catchment area delineation around existing and proposed pier nodes (400m, 800m, 1200m pedestrian catchments).
- **Topological Distance Analysis:** Graph-theoretic measures of network centrality and connectivity.
- **Travel Time Distance Analysis:** Multimodal isochrone modelling combining walking access to piers, water bus travel time (from GTFS), and onward street network travel.
- **Land Use Accessibility Analysis:** POI-weighted accessibility scores measuring the diversity and density of urban amenities reachable within defined travel-time thresholds from each pier node.

### Phase 4 — Result and Interpretation

- **Network Accessibility Maps:** Spatial visualisation of WMNM-derived accessibility surfaces across HCMC.
- **Land Use Accessibility Assessment:** Cross-sectional analysis of POI distribution relative to pier catchment zones.
- **Statistical Analysis:** Correlation between network accessibility scores and socio-economic performance indicators.
- **Model Validation:** Comparison of modelled accessibility against observed ridership data (Route 01) and land value indicators.
- **Case Evaluation:** Assessment of proposed pier expansion scenarios against the established WTOD framework.

---

## 4. Data Sources Summary

| Dataset | Format | Coverage | Access |
|---|---|---|---|
| OSM Roads | Vector line (VGI) | HCMC metropolitan area | Open |
| OSM Waterways | Vector line (VGI) | HCMC canal network | Open |
| GTFS Water Bus | Text / GTFS feed | Route 01 (existing) | Open / DfT HCMC |
| Proposed Pier Nodes | Point dataset | Planned expansion nodes | Research dataset |
| OSM POIs | Point (VGI) | HCMC urban area | Open |
| Census / Socio-economic | Tabular / polygon | District / ward level | GSO Vietnam |

---

## 5. Expected Contributions

1. **Methodological:** The first application of an IUM-derived multimodal network framework to an inland waterway transport context in Southeast Asia, demonstrating the transferability of the WMNM approach beyond rail-based systems.
2. **Empirical:** Quantitative evidence of the network accessibility potential of HCMC's waterway infrastructure, including the spatial impact of proposed pier expansion on urban catchments and land use accessibility.
3. **Policy-Relevant:** An evidence base for Water TOD planning in HCMC, with implications for waterway-city interface design, pier node siting, and integration with the future metro network.

---

## References

- Cervero, R., & Kockelman, K. (1997). Travel demand and the 3Ds: Density, diversity, and design. *Transportation Research Part D, 2*(3), 199–219.
- Ewing, R., & Cervero, R. (2010). Travel and the built environment. *Journal of the American Planning Association, 76*(3), 265–294.
- Hillier, B., et al. (1993). Natural movement: or, configuration and attraction in urban pedestrian movement. *Environment and Planning B, 20*(1), 29–66.
- Turner, A. (2007). From axial to road-centre lines: a new representation for space syntax and a new model of route choice for transport network analysis. *Environment and Planning B, 34*(3), 539–555.
- Antrim, A., & Barbeau, S. J. (2013). The Many Uses of GTFS Data. *OpenPlans.*
