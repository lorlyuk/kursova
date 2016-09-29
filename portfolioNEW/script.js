var NewPortfolio = Backbone.Model.extend ({

});

var NewPortfolioView = Backbone.View.extend ({
    el : '#place_template',

    template : _.template( $('#template').html() ),

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html( this.template( ) );
        return this;
    }
});


var NewPortfolioView = new NewPortfolioView();

$(document.body).append(NewPortfolioView.render().el);