---
layout: post
title: "Why Maps Lie"
date: 2023-11-10
category: writing
description: On projection, power, and the politics of cartographic representation.
tags: [cartography, GIS, urbanism]
image:
---

Every map is a lie. Not in the sense of malicious deception, but in the structural sense — a map is always a reduction of a three-dimensional, infinitely complex reality into a flat, finite representation. Something is always lost. The question is: *what*, and *for whom*.

## The choice of projection

The most obvious place where maps distort is in projection. When you flatten a sphere, you have to stretch or compress somewhere. The Mercator projection, which most of us grew up with, preserves angles — useful for navigation — but massively inflates the size of landmasses near the poles.

The result: Greenland appears roughly the same size as Africa on a Mercator map. In reality, Africa is about 14 times larger.

This isn't a technical accident. Mercator was designed for sailors plotting compass routes. But when it became the default classroom map, it carried those distortions into how generations of students understood geopolitical scale.

## Who decides what gets labeled

Projection is just one layer. Labels are another. Open a map of any contested border region and you'll find — depending on which country produced the map — wildly different place names, boundary lines, and even which side a river belongs to.

Maps don't describe territory. They make claims about it.

## What this means for GIS work

As someone who builds spatial tools and visualizations, I think about this constantly. Every methodological choice — which basemap to use, what color ramp to apply to a choropleth, where to draw district boundaries — encodes assumptions.

The goal isn't to make a "neutral" map, because neutral maps don't exist. The goal is to make the argument explicit, to name what's been left out, and to be honest about the perspective from which the map was made.

That's what I try to do in this work. Not objectivity — honesty.
