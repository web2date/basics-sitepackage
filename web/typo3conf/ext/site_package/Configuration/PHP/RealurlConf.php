<?php
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl'] = [
    'basics.demo.dev' =>
        [
            'init' => [
                'appendMissingSlash' => 'ifNotFile,redirect',
                'emptyUrlReturnValue' => '/',
            ],
            'pagePath' => [
                'rootpage_id' => '1',
            ],
            'fileName' =>
                [
                    'defaultToHTMLsuffixOnPrev' => 0,
                    'acceptHTMLsuffix' => 1,
                    'index' =>
                        [
                            'print' =>
                                [
                                    'keyValues' =>
                                        [
                                            'type' => 98,
                                        ],
                                ],
                        ],
                ],
            'preVars' =>
                [
                    0 =>
                        [
                            'GETvar' => 'L',
                            'valueMap' =>
                                [
                                    'de' => '1',
                                ],
                            'noMatch' => 'bypass',
                        ],
                ],
        ],
];
