"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { formatRelative, format } from "date-fns";
import { enUS, vi } from "date-fns/locale";

import { useLanguage } from "../components/LanguageProvider";

const STREAM_URL =
  "wss://stream.binance.com:9443/stream?streams=solusdt@trade&timeUnit=MICROSECOND";

const COPY = {
  en: {
    eyebrow: "/ Crypto stream",
    title: "SOL/USDT live feed",
    lead:
      "Real-time trades fetched directly from Binance. Useful for gauging momentum while crafting crypto experiences.",
    priceLabel: "Last price",
    table: {
      time: "Time",
      price: "Price (USDT)",
      size: "Size (SOL)",
      side: "Side",
    },
    meta: "Maker",
    maker: "Sell",
    taker: "Buy",
    status: {
      connected: "Live",
      connecting: "Connecting",
      closed: "Disconnected",
    },
  },
  vi: {
    eyebrow: "/ Dòng crypto",
    title: "SOL/USDT trực tiếp",
    lead:
      "Luồng giao dịch realtime lấy từ Binance. Hữu ích để cảm nhận nhịp thị trường khi thiết kế trải nghiệm crypto.",
    priceLabel: "Giá gần nhất",
    table: {
      time: "Thời gian",
      price: "Giá (USDT)",
      size: "Khối lượng (SOL)",
      side: "Bên",
    },
    meta: "Maker",
    maker: "Bán",
    taker: "Mua",
    status: {
      connected: "Đang trực tiếp",
      connecting: "Đang kết nối",
      closed: "Mất kết nối",
    },
  },
} as const;

type Trade = {
  id: number;
  price: number;
  quantity: number;
  side: "maker" | "taker";
  time: number;
};

const MAX_TRADES = 40;

export default function CryptoPage() {
  const { language } = useLanguage();
  const [status, setStatus] = useState<"connecting" | "connected" | "closed">(
    "connecting"
  );
  const [trades, setTrades] = useState<Trade[]>([]);
  const [lastPrice, setLastPrice] = useState<number | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const copy = COPY[language];

  const locale = useMemo(() => (language === "vi" ? vi : enUS), [language]);
  const [high, setHigh] = useState<number | null>(null);
  const [low, setLow] = useState<number | null>(null);

  useEffect(() => {
    const ws = new WebSocket(STREAM_URL);
    wsRef.current = ws;

    ws.addEventListener("open", () => {
      setStatus("connected");
    });

    ws.addEventListener("message", (event) => {
      try {
        const payload = JSON.parse(event.data);
        const data = payload?.data;
        if (!data) return;

        const price = Number(data.p);
        const quantity = Number(data.q);
        const trade: Trade = {
          id: data.t,
          price,
          quantity,
          side: data.m ? "maker" : "taker",
          time: data.T,
        };

        setLastPrice(price);
        setHigh((prev) => (prev == null ? price : Math.max(prev, price)));
        setLow((prev) => (prev == null ? price : Math.min(prev, price)));

        setTrades((prev) => {
          const next = [trade, ...prev];
          if (next.length > MAX_TRADES) {
            next.length = MAX_TRADES;
          }
          return next;
        });
      } catch (error) {
        console.error("Failed to parse trade", error);
      }
    });

    ws.addEventListener("close", () => {
      setStatus("closed");
    });

    return () => {
      ws.close();
    };
  }, []);

  const priceChange = useMemo(() => {
    if (trades.length < 2) return null;
    const latest = trades[0]?.price;
    const previous = trades[trades.length - 1]?.price;
    if (!latest || !previous) return null;
    const diff = latest - previous;
    const pct = (diff / previous) * 100;
    return { diff, pct };
  }, [trades]);

  const formatTime = (timestamp: number) => {
    try {
      return formatRelative(new Date(timestamp), new Date(), { locale });
    } catch {
      return format(new Date(timestamp), "HH:mm:ss.SSS", { locale });
    }
  };

  return (
    <section className="crypto section">
      <div className="crypto__container">
        <div className="section__heading">
          <span className="section__eyebrow crypto__status" data-state={status}>
            {copy.status[status]}
          </span>
          <h1 className="section__title">{copy.title}</h1>
          <p className="section__lead">{copy.lead}</p>
        </div>

        <div className="crypto__ticker glass-panel glass-panel--tight">
          <div className="crypto__ticker-group">
            <span className="crypto__label">{copy.priceLabel}</span>
            <span className="crypto__price">
              {lastPrice ? lastPrice.toFixed(4) : "--"}
            </span>
          </div>
          <div className="crypto__stats">
            <div className="crypto__stat">
              <span>{high ? high.toFixed(3) : "--"}</span>
              <small>24h High</small>
            </div>
            <div className="crypto__stat">
              <span>{low ? low.toFixed(3) : "--"}</span>
              <small>24h Low</small>
            </div>
            <div
              className={`crypto__stat ${
                priceChange && priceChange.diff >= 0
                  ? "crypto__stat--up"
                  : "crypto__stat--down"
              }`}
            >
              <span>
                {priceChange
                  ? `${priceChange.diff.toFixed(3)} (${priceChange.pct.toFixed(
                      2
                    )}%)`
                  : "--"}
              </span>
              <small>Δ vs oldest</small>
            </div>
          </div>
        </div>

        <div className="crypto__table glass-panel glass-panel--tight">
          <div className="crypto__row crypto__row--header">
            <span>{copy.table.time}</span>
            <span>{copy.table.price}</span>
            <span>{copy.table.size}</span>
            <span>{copy.table.side}</span>
            <span>{copy.meta}</span>
          </div>
          <div className="crypto__body">
            {trades.map((trade) => (
              <div
                key={trade.id}
                className={`crypto__row crypto__row--${trade.side}`}
              >
                <span>{formatTime(trade.time)}</span>
                <span>{trade.price.toFixed(4)}</span>
                <span>{trade.quantity.toFixed(3)}</span>
                <span>{trade.side === "maker" ? copy.maker : copy.taker}</span>
                <span>{trade.side === "maker" ? "●" : "○"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
