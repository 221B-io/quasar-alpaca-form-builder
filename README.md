# Alpaca Quasar App Extension 
Alpaca component built for use in quasar
<img src="https://i.ibb.co/K6h1F1n/Screen-Shot-2019-05-01-at-4-26-20-PM.png">
# Install
First link the extension to your app 
```bash
npm link quasar-app-extension-alpaca-forms
```

Then invoke the component
```bash
quasar ext invoke alpaca-forms 
```

# Usage
- Add the formBuilder component to your desired .vue file  

   `<formBuilder :schema="schema" :formData="formData"/>`

- Example **formData**:
  ```json
  formData: {
    "title": "test title"
  }
  ```
- Example **schema**:
  ```json

  schema: {
    "schema": {
      "type": "object",
      "properties": {
        "author": {
          "title": "Authors/Editor",
          "type": "array",
          "items": {
            "title": "Authors",
            "type": "object",
            "properties": {
              "family": {
                "title": "First Name",
                "type": "string",
                "required": false
              },
              "authorMName": {
                "title": "Middle Name",
                "type": "string",
                "required": false
              },
              "given": {
                "type": "string",
                "required": false,
                "title": "Last Name"
              }
            },
            "required": false
          },
          "required": false
        },
        "title": {
          "type": "string",
          "required": false,
          "title": "Title"
        },
        "publisher": {
          "type": "string",
          "required": false,
          "title": "Publisher"
        },     
        "issued": {
          "type": "date",
          "required": false,
          "title": "Date",
          "format": "date"
        },

        "volume": {
          "type": "string",
          "required": false,
          "title": "Volume/Number (optional)"
        },
        "series": {
          "type": "string",
          "required": false,
          "title": "Series (optional)"
        },
        "address": {
          "type": "string",
          "required": false,
          "title": "Address (optional)"
        },
        "edition": {
          "type": "string",
          "required": false,
          "title": "Edition (optional)"
        },
        "note": {
          "type": "string",
          "required": false,
          "title": "Note (optional)"
        },
        "DOI": {
          "type": "string",
          "required": false,
          "title": "Key (optional)"
        }
      },
      "required": false
    },
    "options": {
      "fields": {
        "author": {
          "toolbarSticky": true,
          "toolbarPosition": "bottom",
          "actionbar": {
            "showLabels": true,
            "actions": [
              {
                "label": "+",
                "action": "add"
              },
              {
                "label": "-",
                "action": "remove"
              },
              {
                "label": "↑",
                "action": "up"
              },
              {
                "label": "↓",
                "action": "down"
              }
            ]
          }
        },
        "family": {
          "type": "text",
          "label": "Author First Name"
        },
        "authorMName": {
          "type": "text",
          "label": "Author Middle Name"
        },
        "given": {
          "type": "text",
          "label": "Author Last Name"
        },
        "issued": {
          "type": "date",
          "inputType": "date",
          "picker": {
            "format": "DD/MM/YY"
          }
        }
      },
      "focus": false,
      "type": "object",
      "helpers": [],
      "helpersPosition": "below",
      "validate": true,
      "disabled": false,
      "showMessages": true,
      "collapsible": false,
      "legendStyle": "button",
      "views": "base"
    }
  ```

## Further reading: 
  - Quasar app extensions: https://v1.quasar-framework.org/app-extensions/development-guide/introduction
  - Alpaca Forms: http://www.alpacajs.org/documentation.html

## Future development
- The Quasar view for alpaca still needs to be finished. below are the elements that still need work. With that in mind. Alpaca should be completely useable but the UI aspects might not all look the same.
  - radio button
  - check boxes 
  - file
  - disable fields
  - collapsible
  