<?php

namespace plugin\aoaostar_com\encrypt;

use plugin\Drive;

class App implements Drive
{


    public function Index()
    {
        return msg("ok","success");
    }
}