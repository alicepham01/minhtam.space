---
layout: post
title: "Mekong Delta Flood Risk"
date: 2024-03-15
category: research
description: Spatial modeling of seasonal inundation and displacement risk across the delta region.
tags: [GIS, flood, Vietnam, remote sensing]
image: mekong-flood.jpg
---

The Mekong Delta is one of the most flood-exposed regions in Southeast Asia, yet the dynamics of inundation vary enormously across its network of channels, fields, and settlements. This research builds a seasonal flood risk model using multi-temporal satellite imagery and elevation data to map where — and when — displacement risk is highest.

## Methods

We combined three data sources:

1. **Sentinel-1 SAR imagery** — cloud-penetrating radar allows flood mapping during monsoon season when optical imagery is useless
2. **SRTM 30m DEM** — elevation data to model water flow paths
3. **OpenStreetMap building footprints** — to estimate population exposure

The analysis was conducted in QGIS and Google Earth Engine, with final maps produced in Python using GeoPandas and Matplotlib.

## Key findings

Flood extent during peak season (September–October) covers approximately 1.2 million hectares — roughly 30% of the delta's agricultural land. However, the risk is not evenly distributed. Low-lying communes in Đồng Tháp and An Giang provinces experience inundation depths exceeding 2 meters, with floodwaters persisting for 6–8 weeks.

Settlement patterns inherited from the pre-canal-network era mean that many communities are built directly in natural floodways — areas that historically acted as overflow buffers.

## Implications for planning

The data challenges a common assumption in regional infrastructure planning: that flood risk is primarily a problem of inadequate drainage. In many of the highest-risk areas, the flooding is not incidental — it is structural, embedded in the landscape and the settlement logic together.

Effective responses will need to work with that logic rather than against it.

*Data and methodology available on [GitHub](#).*
