/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
(function(){ var data = {
    "nameToAliasesMap":{
        "Ext.AbstractComponent":[""
        ],
        "Ext.AbstractManager":[""
        ],
        "Ext.AbstractPlugin":[""
        ],
        "Ext.Ajax":[""
        ],
        "Ext.ComponentLoader":[""
        ],
        "Ext.ComponentManager":[""
        ],
        "Ext.ComponentQuery":[""
        ],
        "Ext.ElementLoader":[""
        ],
        "Ext.LoadMask":[""
        ],
        "Ext.ModelManager":[""
        ],
        "Ext.PluginManager":[""
        ],
        "Ext.Template":[""
        ],
        "Ext.XTemplate":[""
        ],
        "Ext.app.Application":[""
        ],
        "Ext.app.Controller":[""
        ],
        "Ext.app.EventBus":[""
        ],
        "Ext.chart.Callout":[""
        ],
        "Ext.chart.Chart":["widget.chart"
        ],
        "Ext.chart.Highlight":[""
        ],
        "Ext.chart.Label":[""
        ],
        "Ext.chart.Legend":[""
        ],
        "Ext.chart.LegendItem":[""
        ],
        "Ext.chart.Mask":[""
        ],
        "Ext.chart.MaskLayer":[""
        ],
        "Ext.chart.Navigation":[""
        ],
        "Ext.chart.Shape":[""
        ],
        "Ext.chart.Tip":[""
        ],
        "Ext.chart.TipSurface":[""
        ],
        "Ext.chart.axis.Abstract":[""
        ],
        "Ext.chart.axis.Axis":[""
        ],
        "Ext.chart.axis.Category":["axis.category"
        ],
        "Ext.chart.axis.Gauge":["axis.gauge"
        ],
        "Ext.chart.axis.Numeric":["axis.numeric"
        ],
        "Ext.chart.axis.Radial":["axis.radial"
        ],
        "Ext.chart.axis.Time":["axis.time"
        ],
        "Ext.chart.series.Area":["series.area"
        ],
        "Ext.chart.series.Bar":["series.bar"
        ],
        "Ext.chart.series.Cartesian":[""
        ],
        "Ext.chart.series.Column":["series.column"
        ],
        "Ext.chart.series.Gauge":["series.gauge"
        ],
        "Ext.chart.series.Line":["series.line"
        ],
        "Ext.chart.series.Pie":["series.pie"
        ],
        "Ext.chart.series.Radar":["series.radar"
        ],
        "Ext.chart.series.Scatter":["series.scatter"
        ],
        "Ext.chart.series.Series":[""
        ],
        "Ext.chart.theme.Base":[""
        ],
        "Ext.chart.theme.Theme":[""
        ],
        "Ext.container.AbstractContainer":[""
        ],
        "Ext.data.AbstractStore":[""
        ],
        "Ext.data.ArrayStore":["store.array"
        ],
        "Ext.data.Association":[""
        ],
        "Ext.data.Batch":[""
        ],
        "Ext.data.BelongsToAssociation":["association.belongsto"
        ],
        "Ext.data.BufferStore":["store.buffer"
        ],
        "Ext.data.Connection":[""
        ],
        "Ext.data.DirectStore":["store.direct"
        ],
        "Ext.data.Errors":[""
        ],
        "Ext.data.Field":["data.field"
        ],
        "Ext.data.HasManyAssociation":["association.hasmany"
        ],
        "Ext.data.JsonP":[""
        ],
        "Ext.data.JsonPStore":["store.jsonp"
        ],
        "Ext.data.JsonStore":["store.json"
        ],
        "Ext.data.Model":[""
        ],
        "Ext.data.NodeInterface":[""
        ],
        "Ext.data.NodeStore":["store.node"
        ],
        "Ext.data.Operation":[""
        ],
        "Ext.data.Request":[""
        ],
        "Ext.data.ResultSet":[""
        ],
        "Ext.data.SortTypes":[""
        ],
        "Ext.data.Store":["store.store"
        ],
        "Ext.data.StoreManager":[""
        ],
        "Ext.data.Tree":["data.tree"
        ],
        "Ext.data.TreeStore":["store.tree"
        ],
        "Ext.data.Types":[""
        ],
        "Ext.data.validations":[""
        ],
        "Ext.data.XmlStore":["store.xml"
        ],
        "Ext.data.proxy.Ajax":["proxy.ajax"
        ],
        "Ext.data.proxy.Client":[""
        ],
        "Ext.data.proxy.Direct":["proxy.direct"
        ],
        "Ext.data.proxy.JsonP":["proxy.jsonp",
            "proxy.scripttag"
        ],
        "Ext.data.proxy.LocalStorage":["proxy.localstorage"
        ],
        "Ext.data.proxy.Memory":["proxy.memory"
        ],
        "Ext.data.proxy.Proxy":["proxy.proxy"
        ],
        "Ext.data.proxy.Rest":["proxy.rest"
        ],
        "Ext.data.proxy.Server":["proxy.server"
        ],
        "Ext.data.proxy.SessionStorage":["proxy.sessionstorage"
        ],
        "Ext.data.proxy.WebStorage":[""
        ],
        "Ext.data.reader.Array":["reader.array"
        ],
        "Ext.data.reader.Json":["reader.json"
        ],
        "Ext.data.reader.Reader":[""
        ],
        "Ext.data.reader.Xml":["reader.xml"
        ],
        "Ext.data.writer.Json":["writer.json"
        ],
        "Ext.data.writer.Writer":["writer.base"
        ],
        "Ext.data.writer.Xml":["writer.xml"
        ],
        "Ext.direct.Event":["direct.event"
        ],
        "Ext.direct.ExceptionEvent":["direct.exception"
        ],
        "Ext.direct.JsonProvider":["direct.jsonprovider"
        ],
        "Ext.direct.Manager":[""
        ],
        "Ext.direct.PollingProvider":["direct.pollingprovider"
        ],
        "Ext.direct.Provider":["direct.provider"
        ],
        "Ext.direct.RemotingEvent":["direct.rpc"
        ],
        "Ext.direct.RemotingMethod":[""
        ],
        "Ext.direct.RemotingProvider":["direct.remotingprovider"
        ],
        "Ext.direct.Transaction":["direct.transaction"
        ],
        "Ext.draw.Color":[""
        ],
        "Ext.draw.Component":["widget.draw"
        ],
        "Ext.draw.CompositeSprite":[""
        ],
        "Ext.draw.Draw":[""
        ],
        "Ext.draw.Matrix":[""
        ],
        "Ext.draw.Sprite":[""
        ],
        "Ext.draw.SpriteDD":[""
        ],
        "Ext.draw.Surface":[""
        ],
        "Ext.draw.engine.Svg":[""
        ],
        "Ext.draw.engine.Vml":[""
        ],
        "Ext.fx.Anim":[""
        ],
        "Ext.fx.Animator":[""
        ],
        "Ext.fx.CubicBezier":[""
        ],
        "Ext.fx.Easing":[],
        "Ext.fx.Manager":[""
        ],
        "Ext.fx.PropertyHandler":[""
        ],
        "Ext.fx.Queue":[""
        ],
        "Ext.fx.target.Component":[""
        ],
        "Ext.fx.target.CompositeElement":[""
        ],
        "Ext.fx.target.CompositeElementCSS":[""
        ],
        "Ext.fx.target.CompositeSprite":[""
        ],
        "Ext.fx.target.Element":[""
        ],
        "Ext.fx.target.ElementCSS":[""
        ],
        "Ext.fx.target.Sprite":[""
        ],
        "Ext.fx.target.Target":[""
        ],
        "Ext.layout.Layout":[""
        ],
        "Ext.layout.component.AbstractDock":[""
        ],
        "Ext.layout.component.Auto":["layout.autocomponent"
        ],
        "Ext.layout.component.Component":[""
        ],
        "Ext.layout.component.Draw":["layout.draw"
        ],
        "Ext.layout.container.AbstractCard":[""
        ],
        "Ext.layout.container.AbstractContainer":[""
        ],
        "Ext.layout.container.AbstractFit":[""
        ],
        "Ext.layout.container.Auto":["layout.auto",
            "layout.autocontainer"
        ],
        "Ext.panel.AbstractPanel":[""
        ],
        "Ext.selection.DataViewModel":[""
        ],
        "Ext.selection.Model":[""
        ],
        "Ext.state.CookieProvider":[""
        ],
        "Ext.state.LocalStorageProvider":["state.localstorage"
        ],
        "Ext.state.Manager":[""
        ],
        "Ext.state.Provider":[""
        ],
        "Ext.state.Stateful":[""
        ],
        "Ext.util.AbstractMixedCollection":[""
        ],
        "Ext.util.Filter":[""
        ],
        "Ext.util.Grouper":[""
        ],
        "Ext.util.HashMap":[""
        ],
        "Ext.util.Inflector":[""
        ],
        "Ext.util.Memento":[""
        ],
        "Ext.util.MixedCollection":[""
        ],
        "Ext.util.Observable":[""
        ],
        "Ext.util.Offset":[""
        ],
        "Ext.util.Point":[""
        ],
        "Ext.util.Region":[""
        ],
        "Ext.util.Sortable":[""
        ],
        "Ext.util.Sorter":[""
        ],
        "Ext.view.AbstractView":[""
        ],
        "Ext.Action":[""
        ],
        "Ext.Component":["widget.component",
            "widget.box"
        ],
        "Ext.Editor":["widget.editor"
        ],
        "Ext.FocusManager":[""
        ],
        "Ext.Img":["widget.image",
            "widget.imagecomponent"
        ],
        "Ext.Layer":[""
        ],
        "Ext.ProgressBar":["widget.progressbar"
        ],
        "Ext.Shadow":[""
        ],
        "Ext.ShadowPool":[""
        ],
        "Ext.ZIndexManager":[""
        ],
        "Ext.button.Button":["widget.button"
        ],
        "Ext.button.Cycle":["widget.cycle"
        ],
        "Ext.button.Split":["widget.splitbutton"
        ],
        "Ext.container.ButtonGroup":["widget.buttongroup"
        ],
        "Ext.container.Container":["widget.container"
        ],
        "Ext.container.Viewport":["widget.viewport"
        ],
        "Ext.dd.DD":[""
        ],
        "Ext.dd.DDProxy":[""
        ],
        "Ext.dd.DDTarget":[""
        ],
        "Ext.dd.DragDrop":[""
        ],
        "Ext.dd.DragDropManager":[""
        ],
        "Ext.dd.DragSource":[""
        ],
        "Ext.dd.DragTracker":[""
        ],
        "Ext.dd.DragZone":[""
        ],
        "Ext.dd.DropTarget":[""
        ],
        "Ext.dd.DropZone":[""
        ],
        "Ext.dd.Registry":[""
        ],
        "Ext.dd.ScrollManager":[""
        ],
        "Ext.dd.StatusProxy":[""
        ],
        "Ext.flash.Component":["widget.flash"
        ],
        "Ext.form.Basic":[""
        ],
        "Ext.form.CheckboxGroup":["widget.checkboxgroup"
        ],
        "Ext.form.CheckboxManager":[""
        ],
        "Ext.form.FieldAncestor":[""
        ],
        "Ext.form.FieldContainer":["widget.fieldcontainer"
        ],
        "Ext.form.FieldSet":["widget.fieldset"
        ],
        "Ext.form.Label":["widget.label"
        ],
        "Ext.form.Labelable":[""
        ],
        "Ext.form.Panel":["widget.form"
        ],
        "Ext.form.RadioGroup":["widget.radiogroup"
        ],
        "Ext.form.RadioManager":[""
        ],
        "Ext.form.action.Action":[""
        ],
        "Ext.form.action.DirectLoad":["formaction.directload"
        ],
        "Ext.form.action.DirectSubmit":["formaction.directsubmit"
        ],
        "Ext.form.action.Load":["formaction.load"
        ],
        "Ext.form.action.StandardSubmit":["formaction.standardsubmit"
        ],
        "Ext.form.action.Submit":["formaction.submit"
        ],
        "Ext.form.field.Base":["widget.field"
        ],
        "Ext.form.field.Checkbox":["widget.checkboxfield",
            "widget.checkbox"
        ],
        "Ext.form.field.ComboBox":["widget.combobox",
            "widget.combo"
        ],
        "Ext.form.field.Date":["widget.datefield"
        ],
        "Ext.form.field.Display":["widget.displayfield"
        ],
        "Ext.form.field.Field":[""
        ],
        "Ext.form.field.File":["widget.filefield",
            "widget.fileuploadfield"
        ],
        "Ext.form.field.Hidden":["widget.hiddenfield",
            "widget.hidden"
        ],
        "Ext.form.field.HtmlEditor":["widget.htmleditor"
        ],
        "Ext.form.field.Number":["widget.numberfield"
        ],
        "Ext.form.field.Picker":["widget.pickerfield"
        ],
        "Ext.form.field.Radio":["widget.radiofield",
            "widget.radio"
        ],
        "Ext.form.field.Spinner":["widget.spinnerfield"
        ],
        "Ext.form.field.Text":["widget.textfield"
        ],
        "Ext.form.field.TextArea":["widget.textareafield",
            "widget.textarea"
        ],
        "Ext.form.field.Time":["widget.timefield"
        ],
        "Ext.form.field.Trigger":["widget.triggerfield",
            "widget.trigger"
        ],
        "Ext.form.field.VTypes":[""
        ],
        "Ext.grid.CellEditor":[""
        ],
        "Ext.grid.ColumnLayout":["layout.gridcolumn"
        ],
        "Ext.grid.Lockable":[""
        ],
        "Ext.grid.LockingView":[""
        ],
        "Ext.grid.PagingScroller":["widget.paginggridscroller"
        ],
        "Ext.grid.Panel":["widget.gridpanel",
            "widget.grid"
        ],
        "Ext.grid.RowEditor":[""
        ],
        "Ext.grid.RowNumberer":["widget.rownumberer"
        ],
        "Ext.grid.Scroller":["widget.gridscroller"
        ],
        "Ext.grid.View":["widget.gridview"
        ],
        "Ext.grid.ViewDropZone":[""
        ],
        "Ext.grid.column.Action":["widget.actioncolumn"
        ],
        "Ext.grid.column.Boolean":["widget.booleancolumn"
        ],
        "Ext.grid.column.Column":["widget.gridcolumn"
        ],
        "Ext.grid.column.Date":["widget.datecolumn"
        ],
        "Ext.grid.column.Number":["widget.numbercolumn"
        ],
        "Ext.grid.column.Template":["widget.templatecolumn"
        ],
        "Ext.grid.feature.AbstractSummary":["feature.abstractsummary"
        ],
        "Ext.grid.feature.Chunking":["feature.chunking"
        ],
        "Ext.grid.feature.Feature":["feature.feature"
        ],
        "Ext.grid.feature.Grouping":["feature.grouping"
        ],
        "Ext.grid.feature.GroupingSummary":["feature.groupingsummary"
        ],
        "Ext.grid.feature.RowBody":["feature.rowbody"
        ],
        "Ext.grid.feature.RowWrap":["feature.rowwrap"
        ],
        "Ext.grid.feature.Summary":["feature.summary"
        ],
        "Ext.grid.header.Container":["widget.headercontainer"
        ],
        "Ext.grid.header.DragZone":[""
        ],
        "Ext.grid.header.DropZone":[""
        ],
        "Ext.grid.plugin.CellEditing":["plugin.cellediting"
        ],
        "Ext.grid.plugin.DragDrop":["plugin.gridviewdragdrop"
        ],
        "Ext.grid.plugin.Editing":["editing.editing"
        ],
        "Ext.grid.plugin.HeaderReorderer":["plugin.gridheaderreorderer"
        ],
        "Ext.grid.plugin.HeaderResizer":["plugin.gridheaderresizer"
        ],
        "Ext.grid.plugin.RowEditing":["plugin.rowediting"
        ],
        "Ext.grid.property.Grid":["widget.propertygrid"
        ],
        "Ext.grid.property.HeaderContainer":[""
        ],
        "Ext.grid.property.Property":[""
        ],
        "Ext.grid.property.Store":[""
        ],
        "Ext.layout.component.Body":["layout.body"
        ],
        "Ext.layout.component.BoundList":["layout.boundlist"
        ],
        "Ext.layout.component.Button":["layout.button"
        ],
        "Ext.layout.component.Dock":["layout.dock"
        ],
        "Ext.layout.component.Editor":["layout.editor"
        ],
        "Ext.layout.component.FieldSet":["layout.fieldset"
        ],
        "Ext.layout.component.ProgressBar":["layout.progressbar"
        ],
        "Ext.layout.component.Tab":["layout.tab"
        ],
        "Ext.layout.component.Tip":["layout.tip"
        ],
        "Ext.layout.component.field.Field":["layout.field"
        ],
        "Ext.layout.component.field.File":["layout.filefield"
        ],
        "Ext.layout.component.field.HtmlEditor":["layout.htmleditor"
        ],
        "Ext.layout.component.field.Slider":["layout.sliderfield"
        ],
        "Ext.layout.component.field.Text":["layout.textfield"
        ],
        "Ext.layout.component.field.TextArea":["layout.textareafield"
        ],
        "Ext.layout.component.field.Trigger":["layout.triggerfield"
        ],
        "Ext.layout.container.Absolute":["layout.absolute"
        ],
        "Ext.layout.container.Accordion":["layout.accordion"
        ],
        "Ext.layout.container.Anchor":["layout.anchor"
        ],
        "Ext.layout.container.Border":["layout.border"
        ],
        "Ext.layout.container.Box":["layout.box"
        ],
        "Ext.layout.container.Card":["layout.card"
        ],
        "Ext.layout.container.CheckboxGroup":["layout.checkboxgroup"
        ],
        "Ext.layout.container.Column":["layout.column"
        ],
        "Ext.layout.container.Container":[""
        ],
        "Ext.layout.container.Fit":["layout.fit"
        ],
        "Ext.layout.container.HBox":["layout.hbox"
        ],
        "Ext.layout.container.Table":["layout.table"
        ],
        "Ext.layout.container.VBox":["layout.vbox"
        ],
        "Ext.layout.container.boxOverflow.Menu":[""
        ],
        "Ext.layout.container.boxOverflow.None":[""
        ],
        "Ext.layout.container.boxOverflow.Scroller":[""
        ],
        "Ext.menu.CheckItem":["widget.menucheckitem"
        ],
        "Ext.menu.ColorPicker":["widget.colormenu"
        ],
        "Ext.menu.DatePicker":["widget.datemenu"
        ],
        "Ext.menu.Item":["widget.menuitem"
        ],
        "Ext.menu.KeyNav":[""
        ],
        "Ext.menu.Manager":[""
        ],
        "Ext.menu.Menu":["widget.menu"
        ],
        "Ext.menu.Separator":["widget.menuseparator"
        ],
        "Ext.panel.DD":[""
        ],
        "Ext.panel.Header":["widget.header"
        ],
        "Ext.panel.Panel":["widget.panel"
        ],
        "Ext.panel.Proxy":[""
        ],
        "Ext.panel.Table":["widget.tablepanel"
        ],
        "Ext.panel.Tool":["widget.tool"
        ],
        "Ext.picker.Color":["widget.colorpicker"
        ],
        "Ext.picker.Date":["widget.datepicker"
        ],
        "Ext.picker.Month":["widget.monthpicker"
        ],
        "Ext.picker.Time":["widget.timepicker"
        ],
        "Ext.resizer.Handle":[""
        ],
        "Ext.resizer.Resizer":[""
        ],
        "Ext.resizer.ResizeTracker":[""
        ],
        "Ext.resizer.Splitter":["widget.splitter"
        ],
        "Ext.resizer.SplitterTracker":[""
        ],
        "Ext.selection.CellModel":["selection.cellmodel"
        ],
        "Ext.selection.CheckboxModel":["selection.checkboxmodel"
        ],
        "Ext.selection.RowModel":["selection.rowmodel"
        ],
        "Ext.selection.TreeModel":["selection.treemodel"
        ],
        "Ext.slider.Multi":["widget.multislider"
        ],
        "Ext.slider.Single":["widget.slider",
            "widget.sliderfield"
        ],
        "Ext.slider.Thumb":[""
        ],
        "Ext.slider.Tip":["widget.slidertip"
        ],
        "Ext.tab.Bar":["widget.tabbar"
        ],
        "Ext.tab.Panel":["widget.tabpanel"
        ],
        "Ext.tab.Tab":["widget.tab"
        ],
        "Ext.tip.QuickTip":[""
        ],
        "Ext.tip.QuickTipManager":[""
        ],
        "Ext.tip.Tip":[""
        ],
        "Ext.tip.ToolTip":["widget.tooltip"
        ],
        "Ext.toolbar.Fill":["widget.tbfill"
        ],
        "Ext.toolbar.Item":["widget.tbitem"
        ],
        "Ext.toolbar.Paging":["widget.pagingtoolbar"
        ],
        "Ext.toolbar.Separator":["widget.tbseparator"
        ],
        "Ext.toolbar.Spacer":["widget.tbspacer"
        ],
        "Ext.toolbar.TextItem":["widget.tbtext"
        ],
        "Ext.toolbar.Toolbar":["widget.toolbar"
        ],
        "Ext.tree.Column":["widget.treecolumn"
        ],
        "Ext.tree.Panel":["widget.treepanel"
        ],
        "Ext.tree.View":["widget.treeview"
        ],
        "Ext.tree.ViewDragZone":[""
        ],
        "Ext.tree.ViewDropZone":[""
        ],
        "Ext.tree.plugin.TreeViewDragDrop":["plugin.treeviewdragdrop"
        ],
        "Ext.util.Animate":[""
        ],
        "Ext.util.ClickRepeater":[""
        ],
        "Ext.util.ComponentDragger":[""
        ],
        "Ext.util.Cookies":[""
        ],
        "Ext.util.CSS":[""
        ],
        "Ext.util.Floating":[""
        ],
        "Ext.util.History":[""
        ],
        "Ext.util.KeyMap":[""
        ],
        "Ext.util.KeyNav":[""
        ],
        "Ext.util.TextMetrics":[""
        ],
        "Ext.view.BoundList":["widget.boundlist"
        ],
        "Ext.view.BoundListKeyNav":[""
        ],
        "Ext.view.DragZone":[""
        ],
        "Ext.view.DropZone":[""
        ],
        "Ext.view.Table":["widget.tableview"
        ],
        "Ext.view.TableChunker":[""
        ],
        "Ext.view.View":["widget.dataview"
        ],
        "Ext.window.MessageBox":["widget.messagebox"
        ],
        "Ext.window.Window":["widget.window"
        ]
    },
    "alternateToNameMap":{
        "Ext.ComponentMgr":"Ext.ComponentManager",
        "Ext.ModelMgr":"Ext.ModelManager",
        "Ext.PluginMgr":"Ext.PluginManager",
        "Ext.chart.Axis":"Ext.chart.axis.Axis",
        "Ext.chart.CategoryAxis":"Ext.chart.axis.Category",
        "Ext.chart.NumericAxis":"Ext.chart.axis.Numeric",
        "Ext.chart.TimeAxis":"Ext.chart.axis.Time",
        "Ext.chart.BarSeries":"Ext.chart.series.Bar",
        "Ext.chart.BarChart":"Ext.chart.series.Bar",
        "Ext.chart.StackedBarChart":"Ext.chart.series.Bar",
        "Ext.chart.CartesianSeries":"Ext.chart.series.Cartesian",
        "Ext.chart.CartesianChart":"Ext.chart.series.Cartesian",
        "Ext.chart.ColumnSeries":"Ext.chart.series.Column",
        "Ext.chart.ColumnChart":"Ext.chart.series.Column",
        "Ext.chart.StackedColumnChart":"Ext.chart.series.Column",
        "Ext.chart.LineSeries":"Ext.chart.series.Line",
        "Ext.chart.LineChart":"Ext.chart.series.Line",
        "Ext.chart.PieSeries":"Ext.chart.series.Pie",
        "Ext.chart.PieChart":"Ext.chart.series.Pie",
        "Ext.data.Record":"Ext.data.Model",
        "Ext.StoreMgr":"Ext.data.StoreManager",
        "Ext.data.StoreMgr":"Ext.data.StoreManager",
        "Ext.StoreManager":"Ext.data.StoreManager",
        "Ext.data.XmlStore":"Ext.data.XmlStore",
        "Ext.data.HttpProxy":"Ext.data.proxy.Ajax",
        "Ext.data.AjaxProxy":"Ext.data.proxy.Ajax",
        "Ext.data.ClientProxy":"Ext.data.proxy.Client",
        "Ext.data.DirectProxy":"Ext.data.proxy.Direct",
        "Ext.data.ScriptTagProxy":"Ext.data.proxy.JsonP",
        "Ext.data.LocalStorageProxy":"Ext.data.proxy.LocalStorage",
        "Ext.data.MemoryProxy":"Ext.data.proxy.Memory",
        "Ext.data.DataProxy":"Ext.data.proxy.Proxy",
        "Ext.data.Proxy":"Ext.data.proxy.Proxy",
        "Ext.data.RestProxy":"Ext.data.proxy.Rest",
        "Ext.data.ServerProxy":"Ext.data.proxy.Server",
        "Ext.data.SessionStorageProxy":"Ext.data.proxy.SessionStorage",
        "Ext.data.WebStorageProxy":"Ext.data.proxy.WebStorage",
        "Ext.data.ArrayReader":"Ext.data.reader.Array",
        "Ext.data.JsonReader":"Ext.data.reader.Json",
        "Ext.data.Reader":"Ext.data.reader.Reader",
        "Ext.data.DataReader":"Ext.data.reader.Reader",
        "Ext.data.XmlReader":"Ext.data.reader.Xml",
        "Ext.data.JsonWriter":"Ext.data.writer.Json",
        "Ext.data.DataWriter":"Ext.data.writer.Writer",
        "Ext.data.Writer":"Ext.data.writer.Writer",
        "Ext.data.XmlWriter":"Ext.data.writer.Xml",
        "Ext.Direct.Transaction":"Ext.direct.Transaction",
        "Ext.AbstractSelectionModel":"Ext.selection.Model",
        "Ext.view.AbstractView":"Ext.view.AbstractView",
        "Ext.FocusMgr":"Ext.FocusManager",
        "Ext.WindowGroup":"Ext.ZIndexManager",
        "Ext.Button":"Ext.button.Button",
        "Ext.CycleButton":"Ext.button.Cycle",
        "Ext.SplitButton":"Ext.button.Split",
        "Ext.ButtonGroup":"Ext.container.ButtonGroup",
        "Ext.Container":"Ext.container.Container",
        "Ext.Viewport":"Ext.container.Viewport",
        "Ext.dd.DragDropMgr":"Ext.dd.DragDropManager",
        "Ext.dd.DDM":"Ext.dd.DragDropManager",
        "Ext.FlashComponent":"Ext.flash.Component",
        "Ext.form.BasicForm":"Ext.form.Basic",
        "Ext.FormPanel":"Ext.form.Panel",
        "Ext.form.FormPanel":"Ext.form.Panel",
        "Ext.form.Action":"Ext.form.action.Action",
        "Ext.form.Action.DirectLoad":"Ext.form.action.DirectLoad",
        "Ext.form.Action.DirectSubmit":"Ext.form.action.DirectSubmit",
        "Ext.form.Action.Load":"Ext.form.action.Load",
        "Ext.form.Action.Submit":"Ext.form.action.Submit",
        "Ext.form.Field":"Ext.form.field.Base",
        "Ext.form.BaseField":"Ext.form.field.Base",
        "Ext.form.Checkbox":"Ext.form.field.Checkbox",
        "Ext.form.ComboBox":"Ext.form.field.ComboBox",
        "Ext.form.DateField":"Ext.form.field.Date",
        "Ext.form.Date":"Ext.form.field.Date",
        "Ext.form.DisplayField":"Ext.form.field.Display",
        "Ext.form.Display":"Ext.form.field.Display",
        "Ext.form.FileUploadField":"Ext.form.field.File",
        "Ext.ux.form.FileUploadField":"Ext.form.field.File",
        "Ext.form.File":"Ext.form.field.File",
        "Ext.form.Hidden":"Ext.form.field.Hidden",
        "Ext.form.HtmlEditor":"Ext.form.field.HtmlEditor",
        "Ext.form.NumberField":"Ext.form.field.Number",
        "Ext.form.Number":"Ext.form.field.Number",
        "Ext.form.Picker":"Ext.form.field.Picker",
        "Ext.form.Radio":"Ext.form.field.Radio",
        "Ext.form.Spinner":"Ext.form.field.Spinner",
        "Ext.form.TextField":"Ext.form.field.Text",
        "Ext.form.Text":"Ext.form.field.Text",
        "Ext.form.TextArea":"Ext.form.field.TextArea",
        "Ext.form.TimeField":"Ext.form.field.Time",
        "Ext.form.Time":"Ext.form.field.Time",
        "Ext.form.TriggerField":"Ext.form.field.Trigger",
        "Ext.form.TwinTriggerField":"Ext.form.field.Trigger",
        "Ext.form.Trigger":"Ext.form.field.Trigger",
        "Ext.list.ListView":"Ext.grid.Panel",
        "Ext.ListView":"Ext.grid.Panel",
        "Ext.grid.GridPanel":"Ext.grid.Panel",
        "Ext.grid.ActionColumn":"Ext.grid.column.Action",
        "Ext.grid.BooleanColumn":"Ext.grid.column.Boolean",
        "Ext.grid.Column":"Ext.grid.column.Column",
        "Ext.grid.DateColumn":"Ext.grid.column.Date",
        "Ext.grid.NumberColumn":"Ext.grid.column.Number",
        "Ext.grid.TemplateColumn":"Ext.grid.column.Template",
        "Ext.grid.PropertyGrid":"Ext.grid.property.Grid",
        "Ext.grid.PropertyColumnModel":"Ext.grid.property.HeaderContainer",
        "Ext.PropGridProperty":"Ext.grid.property.Property",
        "Ext.grid.PropertyStore":"Ext.grid.property.Store",
        "Ext.layout.AbsoluteLayout":"Ext.layout.container.Absolute",
        "Ext.layout.AccordionLayout":"Ext.layout.container.Accordion",
        "Ext.layout.AnchorLayout":"Ext.layout.container.Anchor",
        "Ext.layout.BorderLayout":"Ext.layout.container.Border",
        "Ext.layout.BoxLayout":"Ext.layout.container.Box",
        "Ext.layout.CardLayout":"Ext.layout.container.Card",
        "Ext.layout.ColumnLayout":"Ext.layout.container.Column",
        "Ext.layout.ContainerLayout":"Ext.layout.container.Container",
        "Ext.layout.FitLayout":"Ext.layout.container.Fit",
        "Ext.layout.HBoxLayout":"Ext.layout.container.HBox",
        "Ext.layout.TableLayout":"Ext.layout.container.Table",
        "Ext.layout.VBoxLayout":"Ext.layout.container.VBox",
        "Ext.layout.boxOverflow.Menu":"Ext.layout.container.boxOverflow.Menu",
        "Ext.layout.boxOverflow.None":"Ext.layout.container.boxOverflow.None",
        "Ext.layout.boxOverflow.Scroller":"Ext.layout.container.boxOverflow.Scroller",
        "Ext.menu.TextItem":"Ext.menu.Item",
        "Ext.menu.MenuMgr":"Ext.menu.Manager",
        "Ext.Panel":"Ext.panel.Panel",
        "Ext.dd.PanelProxy":"Ext.panel.Proxy",
        "Ext.ColorPalette":"Ext.picker.Color",
        "Ext.DatePicker":"Ext.picker.Date",
        "Ext.MonthPicker":"Ext.picker.Month",
        "Ext.Resizable":"Ext.resizer.Resizer",
        "Ext.slider.MultiSlider":"Ext.slider.Multi",
        "Ext.Slider":"Ext.slider.Single",
        "Ext.form.SliderField":"Ext.slider.Single",
        "Ext.slider.SingleSlider":"Ext.slider.Single",
        "Ext.slider.Slider":"Ext.slider.Single",
        "Ext.TabPanel":"Ext.tab.Panel",
        "Ext.QuickTip":"Ext.tip.QuickTip",
        "Ext.Tip":"Ext.tip.Tip",
        "Ext.ToolTip":"Ext.tip.ToolTip",
        "Ext.Toolbar.Fill":"Ext.toolbar.Fill",
        "Ext.Toolbar.Item":"Ext.toolbar.Item",
        "Ext.PagingToolbar":"Ext.toolbar.Paging",
        "Ext.Toolbar.Separator":"Ext.toolbar.Separator",
        "Ext.Toolbar.Spacer":"Ext.toolbar.Spacer",
        "Ext.Toolbar.TextItem":"Ext.toolbar.TextItem",
        "Ext.Toolbar":"Ext.toolbar.Toolbar",
        "Ext.tree.TreePanel":"Ext.tree.Panel",
        "Ext.TreePanel":"Ext.tree.Panel",
        "Ext.History":"Ext.util.History",
        "Ext.KeyMap":"Ext.util.KeyMap",
        "Ext.KeyNav":"Ext.util.KeyNav",
        "Ext.BoundList":"Ext.view.BoundList",
        "Ext.DataView":"Ext.view.View",
        "Ext.MessageBox":"Ext.window.MessageBox",
        "Ext.Window":"Ext.window.Window"
    }
};var scripts = document.getElementsByTagName('script'),
    path = '',
    i, ln, src, match;

for (i = 0, ln = scripts.length; i < ln; i++) {
    src = scripts[i].src;

    match = src.match(/ext(-debug)?\.js$/);

    if (match) {
        path = src.substring(0, src.length - match[0].length);
        break;
    }
}

var nameToAliasesMap = data.nameToAliasesMap,
    alternateToNameMap = data.alternateToNameMap,
    classManager = Ext.ClassManager,
    name, aliases;

for (name in nameToAliasesMap) {
    if (nameToAliasesMap.hasOwnProperty(name)) {
        aliases = nameToAliasesMap[name];

        if (aliases.length > 0) {
            for (i = 0, ln = aliases.length; i < ln; i++) {
                classManager.setAlias(name, aliases[i]);
            }
        }
        else {
            classManager.setAlias(name, null);
        }
    }
}

Ext.Object.merge(classManager.maps.alternateToName, alternateToNameMap);

Ext.Loader.setConfig({
    enabled: true,
    disableCaching: true,
    paths: {
        'Ext': path + 'src'
    }
});
})();


