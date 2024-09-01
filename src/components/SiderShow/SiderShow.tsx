import React, { useEffect, useState } from "react";
import "./sider.css";
import { SiderButton } from "./SiderButton";
// import { SiderDot } from "./SiderDot";

interface ImageCSSStyle {
  width: string;
  height: string;
}

interface SiderShowProps {
  imageshow: string[];
  imageStyle: ImageCSSStyle;
}

export const SiderShow = ({ imageshow, imageStyle }: SiderShowProps) => {
  const [index, setIndex] = useState(0);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);
  const exampleImage = imageshow.length
    ? imageshow
    : [
        "https://picsum.photos/300/200?random=1",
        "https://picsum.photos/300/200?random=2",
        "https://picsum.photos/300/200?random=3",
      ];
  // 设置定时器，每隔2s切换
  useEffect(() => {
    if (autoPlay) {
      // 如果自动播放，那么就设置定时器
      const timer = setTimeout(() => {
        setIndex((index + 1) % exampleImage.length);
      }, 2000);
      return () => clearTimeout(timer); // 清除定时器
    }
  }, [index, autoPlay]);
  // 左右切换
  useEffect(() => {
    if (index > 0) {
      setShowLeft(true);
    } else {
      setShowLeft(false);
    }
    if (index < exampleImage.length - 1) {
      setShowRight(true);
    } else {
      setShowRight(false);
    }
  }, [index]);
  return (
    <div className="sider-container">
      {exampleImage.map((item, i) => {
        return (
          <img
            key={i}
            src={`${item}`}
            alt=""
            style={{ display: index === i ? "block" : "none", ...imageStyle }}
            onClick={() => {
              setIndex(i);
            }}
          />
        );
      })}

      {showLeft ? (
        <SiderButton
          styleClass="sider-button sider-button-left"
          onClick={() => {
            setIndex((index - 1 + exampleImage.length) % exampleImage.length);
            setAutoPlay(false);
            // 恢复自动播放
            setTimeout(() => {
              setAutoPlay(true);
            }, 500);
          }}
          svg={
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5376"
              width="16"
              height="16"
              className="sider-svg"
            >
              <path
                d="M341.333333 550.684444l293.546667 284.444445a31.004444 31.004444 0 0 0 40.96 0 26.737778 26.737778 0 0 0 0-37.546667l-279.893333-269.937778a16.497778 16.497778 0 0 1 0-23.893333l278.471111-270.506667a26.737778 26.737778 0 0 0 0-37.546666 31.004444 31.004444 0 0 0-40.96 0L341.333333 479.004444a49.493333 49.493333 0 0 0 0 71.68z"
                fill="#999999"
                p-id="5377"
              ></path>
            </svg>
          }
        />
      ) : null}
      {showRight ? (
        <SiderButton
          styleClass="sider-button sider-button-right"
          onClick={() => {
            setIndex((index + 1) % exampleImage.length);
            setAutoPlay(false);
            // 恢复自动播放
            setTimeout(() => {
              setAutoPlay(true);
            }, 500);
          }}
          svg={
            <svg
              // t="1725155390780"
              // class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1441"
              width="16"
              height="16"
              className="sider-svg"
            >
              <path
                d="M648.817778 479.004444l-293.831111-284.444444a31.004444 31.004444 0 0 0-40.96 0A26.737778 26.737778 0 0 0 312.888889 233.244444l280.177778 269.653334a16.497778 16.497778 0 0 1 0 23.893333L312.888889 796.444444a26.737778 26.737778 0 0 0 0 37.546667 31.004444 31.004444 0 0 0 40.96 0l293.831111-284.444444a49.493333 49.493333 0 0 0 1.137778-70.542223z"
                fill="#999999"
                p-id="1442"
              ></path>
            </svg>
          }
        />
      ) : null}

      <div className="sider-dot-container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {exampleImage.map((_, i) => {
            return (
              <div
                key={i}
                className={`sider-dot ${index === i ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setIndex(i);
                  setAutoPlay(false);
                  // 恢复自动播放
                  setTimeout(() => {
                    setAutoPlay(true);
                  }, 500);
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
