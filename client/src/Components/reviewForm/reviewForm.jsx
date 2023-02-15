import { useState } from "react";
import { useMutation } from "@apollo/client";

import FooterComponent from "../../Components/footer/footer";
import HeaderComponent from "../../Components/header/header";
import { ADD_REVIEW } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { Button } from "antd";
import style from "./reviewForm.module.css";
