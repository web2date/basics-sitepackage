tt_content.gridelements_pi1.20.10.setup {
    # Default config
    default < lib.gridelements.defaultGridSetup
    default {
        wrap = <div class="row">|</div>
    }

    2Columns_50 < .default
    2Columns_50 {
        columns {
            0 < .default
            0.wrap = <div class="col-md-6">|</div>

            1 < .default
            1.wrap = <div class="col-md-6">|</div>
        }
    }

    2Columns_66_33 < .default
    2Columns_66_33 {
        columns {
            0 < .default
            0.wrap = <div class="col-md-9">|</div>

            1 < .default
            1.wrap = <div class="col-md-3">|</div>
        }
    }

    2Columns_33_66 < .default
    2Columns_33_66 {
        columns {
            0 < .default
            0.wrap = <div class="col-md-3">|</div>

            1 < .default
            1.wrap = <div class="col-md-9">|</div>
        }
    }

    3Columns_33 < .default
    3Columns_33 {
        columns {
            0 < .default
            0.wrap = <div class="col-md-3">|</div>

            1 < .default
            1.wrap = <div class="col-md-3">|</div>

            2 < .default
            2.wrap = <div class="col-md-3">|</div>
        }
    }

    4Columns_25 < .default
    4Columns_25 {
        columns {
            0 < .default
            0.wrap = <div class="col-md-3 col-xs-6">|</div>

            1 < .default
            1.wrap = <div class="col-md-3 col-xs-6">|</div>

            2 < .default
            2.wrap = <div class="col-md-3 col-xs-6">|</div>

            3 < .default
            3.wrap = <div class="col-md-3 col-xs-6">|</div>
        }
    }
}
