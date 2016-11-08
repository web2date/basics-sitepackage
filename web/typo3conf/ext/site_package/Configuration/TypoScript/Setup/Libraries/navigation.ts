lib.navigation {
    header = HMENU
    header {
        entryLevel = 1

        10 = TEXT
        10.data =

        1 = TMENU
        1 {
            expAll = 1

            NO = 1
            NO {
                allWrap = <li>|</li>
            }

            ACT < .NO
            ACT {
                allWrap = <li class="active">|</li>
            }
        }
    }
}
