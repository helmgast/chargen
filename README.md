# Chargen

Chargen, or Character Generator, is a framework from Helmgast to easily create, generate, edit and store role-playing characters. This repository contains the frontend side of the application which also is the main part. The server part is contained in the [Lore](https://github.com/helmgast/lore) application.

## Goal

The overall goal is a web app that let's game creators easily define the content, rules and visual forms necessary to create characters in their particular game. We have built several custom character generators and found that it's both a large undertaking and a lot of repetitive work. Even though game rules can differ greatly, we feel there is a lot of commonality that can be addressed by a framework. It's intended for web based frontends that work on both desktop and mobile, but major parts of it would be applicable also to e.g. native mobile apps.

This project is just in its starting phase and we welcome collaborators! We will start with the goal of creating character generators for Eon and Neotech, later maybe Kult. Hopefully it will by then be possible to let anyone create a character generator by defining their own schema and form.

The framework is planned to consist of the following parts:

## Import data
Custom scripts to import the (tabular) data that is defined in texts from role-playing games, into a format that the server can consume. This can also involve some data editing in Google Sheets.

## Generator data

To create a character, you'd typically choose from or roll from lists of content, may it be characteristics, experiences, traits and so on. This is mostly written "inspirational" content but would also typically contain rule expressions to resolve. We need to define a format for generator data and either store it on Google Sheets or on the Lore server.

## Rule expressions

DSL-like expressions to modify a rule attribute, e.g. +2 in x on y, add 1d6x100 silver, choose one from a, b c. We need to define the operands and formatting of these expressions, while making it as minimal and human-readable as possible.

## Rule schema

A schema-based JSON to define what character data can be stored and how it would be calculcated and validated. This can be seen as the validation schema for a traditional web app form interface but it also extends to defining some of the rules of the game. E.g. "Strength" has to be a value between 3 and 18, and "Endurance" is a calculated expression from *Strength* and *Willpower*. The schema need to have a schema on its own, that makes it possible to parse schemas for different games in the same way.

The basis of the schema is a set of *attributes*, where an attribute represents a type of value that can be stored on a character.

## Character Data

If the Rule schema is the "class" in object oriented thinking, the character data is the "instance". It's essentially the specific values of a specific character that is saved by a user. The data is therefore validated and defined by the specific Rule schema, and is a subset of it.

## Character metadata

The "article" object on the server that associates the character with a user, authorization rules, template used, etc.

## Form elements

To build a character form, you will need a set of common form components to make it easy to create new forms. These components also need to be connected to the Rule schema, as they should validate input based on it. So we need to build a set of generic components with good user experience, working across desktop and mobile and that minimizes the amount of code and competence required by someone that wants to build a new character form.

Examples can be `<Attribute>`, `<Text>`, `<Art>`, `<Radio>`. We are using [Vue](https://vuejs.org/) as basis for these elements.

## Form template

An HTML/Vue template that uses form elements and custom layout and art to create a complete fillable form that is responsive. A game creator (or a fan) can define the form template and once it's uploaded and verified by Lore, new characters can be created using this template. The template is the entrypoint and where the actual frontend [Vue](https://vuejs.org/) application lives. The template is "hydrated" with the Character data when loading an existing character.

