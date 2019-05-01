<template>
  <div>
    <div class="main-wrapper" id="alpaca-form"></div>
  </div>
</template>

<script>
export default {
  name: "formBuilder",
  props: ['schema', 'formData'],
  mounted() {
		this.setupAlpaca()
  },
  methods: {
    async setupAlpaca() {
      let schema = await this.setupQuasarView();
      let form = this.$jquery("#alpaca-form");
      this.$jquery(document).ready(() => {
        form.alpaca(schema);
			});
    },
    /**
     * Fetch the schema for the form 
     * @return {schema} a json blob representing a form struture
     */
    setupQuasarView() {
      let self = this;
      let styles = {};
      styles["button"] = "q-pt-lg q-pl-xs q-btn inline q-btn-item non-selectable q-btn--flat q-btn--rectangle text-primary q-focusable q-hoverable";
      styles["smallButton"] = "q-pt-lg q-pl-xs q-btn inline q-btn-item non-selectable q-btn--flat q-btn--rectangle text-primary q-focusable q-hoverable";
      styles["addIcon"] = "";
      styles["removeIcon"] = "";
      styles["upIcon"] = "";
      styles["downIcon"] = "";
      styles["expandedIcon"] = "";
      styles["collapsedIcon"] = "";
      styles["table"] = "";

			let callbacks = {};
			callbacks["control"] = function () {
				// controls get some special formatting
				var fieldEl = this.getFieldEl();
				let label = self.$jquery(fieldEl).find('label').text();
				// console.log(label)
				// controlEl
				// var controlEl = this.getControlEl();
				// all controls get the "form-control" class injected
				//q-field row no-wrap items-start q-input q-field--standard q-field--focused q-field--float q-field--labeled q-field--with-bottom
				//q-field row no-wrap items-start q-input q-field--standard q-field--labeled q-field--with-bottom
				self.$jquery(fieldEl).find("label").css("display", "none");
				self.$jquery(fieldEl).find("input").addClass("q-field__native");
				self.$jquery(fieldEl).find("input").wrap( 
					'<div class="q-field row no-wrap items-start q-input q-field--standard q-field--labeled q-field--with-bottom">' +
						'<div class="q-field__inner relative-position col self-stretch column justify-center">' +
							'<div tabindex="-1" class="q-field__control relative-position row no-wrap">' + 
								'<div class="q-field__control-container col relative-position row no-wrap q-anchor--skip">'+
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>'
				);
				self.$jquery(fieldEl).find("input").after('<div class="q-field__label no-pointer-events absolute ellipsis">'+ label +'</div>')
				// define after eles have been created
				let isDateInput = self.$jquery(fieldEl).find("input").attr('type') == "date";
				
				// Focus events
				self.$jquery(document).on("focus",".q-field", function () {
					self.$jquery(this).addClass('q-field--focused q-field--float');
				});

				self.$jquery(document).on("focusout",".q-field", function () {
					// check to make sure there is a value if there is do not move the label back down
					if(self.$jquery(this).find('input').val().replace(/\s+/g, '') === "") {
						self.$jquery(this).removeClass('q-field--focused q-field--float');
					} else {
						self.$jquery(this).removeClass('q-field--focused');
					}
				// TODO: DRY
				if(isDateInput) {
					self.$jquery(fieldEl).find("input").closest(".q-field").addClass('q-field--float')
				}
				});
				// TODO: DRY
				if(isDateInput) {
					self.$jquery(fieldEl).find("input").closest(".q-field").addClass('q-field--float')
				}

				// debugger;
				if(self.$jquery(fieldEl).find("input").val().replace(/\s+/g, '') != "") {
					self.$jquery(fieldEl).find("input").addClass('q-field--focused q-field--float');
				}

				// self.$jquery(fieldEl).find("textarea").addClass("form-control");
				// self.$jquery(fieldEl).find("select").addClass("form-control");
				// // except for the following
				// self.$jquery(fieldEl).find("input[type=checkbox]").removeClass("form-control");
				// self.$jquery(fieldEl).find("input[type=file]").removeClass("form-control");
				// self.$jquery(fieldEl).find("input[type=radio]").removeClass("form-control");

				// // special case for type == color, remove form-control
				// if (this.inputType === "color") {
				// 	self.$jquery(fieldEl).find("input").removeClass("form-control");
				// }
				// // any checkbox inputs get the "checkbox" class on their checkbox
				// self.$jquery(fieldEl).find("input[type=checkbox]").parent().parent().addClass("checkbox");
				// // any radio inputs get the "radio" class on their radio
				// self.$jquery(fieldEl).find("input[type=radio]").parent().parent().addClass("radio");

				// // if form has "form-inline" class, then radio and checkbox labels get inline classes
				// if (self.$jquery(fieldEl).parents("form").hasClass("form-inline")) {
				// 	// checkboxes
				// 	self.$jquery(fieldEl).find("input[type=checkbox]").parent().addClass("checkbox-inline");

				// 	// radios
				// 	self.$jquery(fieldEl).find("input[type=radio]").parent().addClass("radio-inline");
				// }

				// // all control labels get class "control-label"
				// self.$jquery(fieldEl).find("label.alpaca-control-label").addClass("control-label");

				// // if in horizontal mode, add a wrapper div (col-sm-9) and label gets (col-sm-3)
				// if (this.view.horizontal) {
				// 	self.$jquery(fieldEl).find("label.alpaca-control-label").addClass("col-sm-3");

				// 	//align help text with input.
				// 	self.$jquery(fieldEl).find(".help-block").addClass("col-sm-offset-3 col-sm-9");

				// 	var wrapper = self.$jquery("<div></div>");
				// 	wrapper.addClass("col-sm-9");

				// 	self.$jquery(controlEl).after(wrapper);
				// 	wrapper.append(controlEl);

				// 	self.$jquery(fieldEl).append("<div style='clear:both;'></div>");
				// }
			};

			// callbacks["container"] = function () {
				// var containerEl = this.getContainerEl();

			// 	if (this.view.horizontal) {
			// 		self.$jquery(containerEl).addClass("form-horizontal");
			// 	}
			// };

			// callbacks["form"] = function () {
			// 	// var formEl = this.getFormEl();
				
			// 	// use pull-right for form buttons
			// 	//self.$jquery(formEl).find(".alpaca-form-buttons-container").addClass("pull-right");
			// };

			// callbacks["enableButton"] = function (button) {
			// 	self.$jquery(button).removeAttr("disabled");
			// };
			// callbacks["disableButton"] = function (button) {
			// 	self.$jquery(button).attr("disabled", "disabled");
			// };
			// callbacks["collapsible"] = function () {
			// 	var fieldEl = this.getFieldEl();
			// 	var legendEl = self.$jquery(fieldEl).find("legend").first();
			// 	var anchorEl = self.$jquery("[data-toggle='collapse']", legendEl);
			// 	if (self.$jquery(anchorEl).length > 0) {
			// 		var containerEl = this.getContainerEl();

			// 		// container id
			// 		var id = self.$jquery(containerEl).attr("id");
			// 		if (!id) {
			// 			id = self.$alpaca.generateId();
			// 			self.$jquery(containerEl).attr("id", id);
			// 		}

			// 		// set up container to be collapsible
			// 		self.$jquery(containerEl).addClass("collapse");
			// 		if (!this.options.collapsed) {
			// 			self.$jquery(containerEl).addClass("in");
			// 		}

			// 		// set up legend anchor
			// 		if (!self.$jquery(anchorEl).attr("data-target")) {
			// 			self.$jquery(anchorEl).attr("data-target", "#" + id);
			// 		}

			// 		self.$jquery(anchorEl).mouseover(function () {
			// 			self.$jquery(this).css("cursor", "pointer");
			// 		})
			// 	}
			// };

			// // table-control callbacks
			// callbacks["tableHeaderRequired"] = function (schema, options) {
			// 	// required fields get a little star in their label
			// 	self.$jquery('<span class="alpaca-icon-required glyphicon glyphicon-star"></span>').prependTo(domEl);

			// };
			// callbacks["tableHeaderOptional"] = function (schema, options) {};



			this.$alpaca.registerView({
        "id": "quasarView",
        "parent": "bootstrap-create",
        "type": "edit",
        "ui": "quasar",
        "title": "Display View for Quasar",
        "displayReadonly": false,
        "callbacks": callbacks,
        "styles": styles,
				"templates": {},
				"horizontal": false
    	});


        let formSchema = this.schema;
				formSchema.data = self.formData;
				formSchema.view = 'quasarView'
				formSchema.postRender = function(control) {
					// Check if input has data in it. if it does add classes
					self.$jquery(document).find("input[id^='alpaca']").each(function(i,item){
						let alpacaInput =	self.$jquery(`#${item.id}`);
						if(alpacaInput.val().replace(/\s+/g, '') != "") {
							alpacaInput.closest(".q-field").addClass('q-field--focused q-field--float');	
						}
					})
				}
        return formSchema;
    },
  },
};
</script>

<style scoped lang="scss">
</style>

