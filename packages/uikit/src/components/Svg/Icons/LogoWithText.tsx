import { vars } from "@pancakeswap/ui/css/vars.css";
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Logo: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 95 29" {...props}>
      <path d="M1.44002 28.32C1.30669 28.32 1.18669 28.28 1.08002 28.2C1.00002 28.0933 0.960022 27.9733 0.960022 27.84V0.799999C0.960022 0.666666 1.00002 0.559998 1.08002 0.479998C1.18669 0.373331 1.30669 0.319998 1.44002 0.319998H7.12002C7.25336 0.319998 7.36002 0.373331 7.44002 0.479998C7.54669 0.559998 7.60002 0.666666 7.60002 0.799999V22.44C7.60002 22.5733 7.66669 22.64 7.80002 22.64H20.56C20.6934 22.64 20.8 22.6933 20.88 22.8C20.9867 22.88 21.04 22.9867 21.04 23.12V27.84C21.04 27.9733 20.9867 28.0933 20.88 28.2C20.8 28.28 20.6934 28.32 20.56 28.32H1.44002Z" fill="#e20917"/>
      <path d="M33.9391 28.76C31.7791 28.76 29.8724 28.3333 28.2191 27.48C26.5924 26.6 25.3258 25.3733 24.4191 23.8C23.5124 22.2267 23.0591 20.4 23.0591 18.32V10.32C23.0591 8.29333 23.5124 6.50666 24.4191 4.96C25.3258 3.38666 26.5924 2.17333 28.2191 1.32C29.8724 0.44 31.7791 0 33.9391 0C36.0991 0 38.0058 0.44 39.6591 1.32C41.3124 2.17333 42.5924 3.38666 43.4991 4.96C44.4058 6.50666 44.8591 8.29333 44.8591 10.32V18.32C44.8591 20.4 44.4058 22.2267 43.4991 23.8C42.5924 25.3733 41.3124 26.6 39.6591 27.48C38.0058 28.3333 36.0991 28.76 33.9391 28.76ZM33.9391 23.08C35.2191 23.08 36.2458 22.6667 37.0191 21.84C37.8191 21.0133 38.2191 19.9067 38.2191 18.52V10.24C38.2191 8.88 37.8191 7.78667 37.0191 6.96C36.2458 6.10667 35.2191 5.68 33.9391 5.68C32.6858 5.68 31.6591 6.10667 30.8591 6.96C30.0858 7.78667 29.6991 8.88 29.6991 10.24V18.52C29.6991 19.9067 30.0858 21.0133 30.8591 21.84C31.6591 22.6667 32.6858 23.08 33.9391 23.08Z" fill="#e20917"/>
      <path d="M58.6228 28.64C56.4895 28.64 54.6095 28.2133 52.9828 27.36C51.3828 26.5067 50.1295 25.3067 49.2228 23.76C48.3428 22.2133 47.9028 20.4267 47.9028 18.4V10.2C47.9028 8.17333 48.3428 6.4 49.2228 4.88C50.1295 3.33333 51.3828 2.13333 52.9828 1.28C54.6095 0.426665 56.4895 0 58.6228 0C60.7295 0 62.5962 0.413332 64.2228 1.24C65.8495 2.04 67.1028 3.14667 67.9828 4.56C68.8895 5.97333 69.3428 7.53333 69.3428 9.24V9.44C69.3428 9.57333 69.2895 9.69333 69.1828 9.8C69.1028 9.88 68.9962 9.92 68.8628 9.92H63.1828C63.0495 9.92 62.9295 9.88 62.8228 9.8C62.7428 9.69333 62.7028 9.57333 62.7028 9.44C62.7028 8.4 62.3295 7.52 61.5828 6.8C60.8628 6.05333 59.8762 5.68 58.6228 5.68C57.3962 5.68 56.4095 6.08 55.6628 6.88C54.9162 7.68 54.5428 8.72 54.5428 10V18.6C54.5428 19.88 54.9562 20.92 55.7828 21.72C56.6095 22.52 57.6495 22.92 58.9028 22.92C60.0762 22.92 61.0228 22.6133 61.7428 22C62.4628 21.36 62.8228 20.48 62.8228 19.36V18.24C62.8228 18.1067 62.7562 18.04 62.6228 18.04H58.6228C58.4895 18.04 58.3695 18 58.2628 17.92C58.1828 17.8133 58.1428 17.6933 58.1428 17.56V13.16C58.1428 13.0267 58.1828 12.92 58.2628 12.84C58.3695 12.7333 58.4895 12.68 58.6228 12.68H68.8628C68.9962 12.68 69.1028 12.7333 69.1828 12.84C69.2895 12.92 69.3428 13.0267 69.3428 13.16V18.6C69.3428 20.6 68.8895 22.36 67.9828 23.88C67.1028 25.4 65.8495 26.5733 64.2228 27.4C62.6228 28.2267 60.7562 28.64 58.6228 28.64Z" fill="#e20917"/>
      <path d="M83.275 28.76C81.115 28.76 79.2084 28.3333 77.555 27.48C75.9284 26.6 74.6617 25.3733 73.755 23.8C72.8484 22.2267 72.395 20.4 72.395 18.32V10.32C72.395 8.29333 72.8484 6.50666 73.755 4.96C74.6617 3.38666 75.9284 2.17333 77.555 1.32C79.2084 0.44 81.115 0 83.275 0C85.435 0 87.3417 0.44 88.995 1.32C90.6484 2.17333 91.9284 3.38666 92.835 4.96C93.7417 6.50666 94.195 8.29333 94.195 10.32V18.32C94.195 20.4 93.7417 22.2267 92.835 23.8C91.9284 25.3733 90.6484 26.6 88.995 27.48C87.3417 28.3333 85.435 28.76 83.275 28.76ZM83.275 23.08C84.555 23.08 85.5817 22.6667 86.355 21.84C87.155 21.0133 87.555 19.9067 87.555 18.52V10.24C87.555 8.88 87.155 7.78667 86.355 6.96C85.5817 6.10667 84.555 5.68 83.275 5.68C82.0217 5.68 80.995 6.10667 80.195 6.96C79.4217 7.78667 79.035 8.88 79.035 10.24V18.52C79.035 19.9067 79.4217 21.0133 80.195 21.84C80.995 22.6667 82.0217 23.08 83.275 23.08Z" fill="#e20917"/>
    </Svg>
  );
};

export default Logo;
