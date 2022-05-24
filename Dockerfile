# Install dependencies only when needed
FROM node:alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
ENV PUBLIC_URL=https://zdrop.com.bd
ENV API_AUTH_URL=https://api.zdrop.com.bd/auth_service
ENV API_ORDER_SERVICE=https://api.zdrop.com.bd/order_service
ENV API_URL=https://api.zdrop.com.bd/customer_service
ENV API_CUSTOMER_SERVICE=https://api.zdrop.com.bd/customer_service
ENV API_PRODUCT_URL=https://api.zdrop.com.bd/product_service
ENV API_PAYMENT_SERVICE=https://api.zdrop.com.bd/payment_service
ENV API_CMS_SERVICE=https://api.zdrop.com.bd/cms_service
ENV BKASH_NUMBER=01961900400
ENV SUPPORT_NUMBER=09638121212
ENV SUPPORT_EMAIL=support@zdrop.com.bd
ENV FACEBOOK_URL=https://www.facebook.com/zDropBangladesh
ENV TWITTER_URL=https://twitter.com/zdropbd
ENV LINKEDIN_URL=https://linkedin.com/company/zdrop
ENV INSTAGRAM_URL=https://instagram.com/zdropbd
ENV YOUTUBE_URL=https://www.youtube.com/channel/UCRSt9p046PltiEopGj73pXQ
ENV SELLER_CAVE_URL=https://seller.zdrop.com.bd

ENV BKASH_SCRIPT_URL=https://scripts.pay.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout.js


ENV FIREBASE_API_KEY=AIzaSyBJFgrBKgcn5rupm111Mwgbgnrnad2mwnY
ENV FIREBASE_AUTH_DOMEN=fcm-auth-27b42.firebaseapp.com
ENV FIREBASE_PROJECT_ID=fm-auth-27b42
ENV FIREBASE_STORE_BUCKET=fcm-auth-27b42.appspot.com
ENV FIREBASE_MESSAGING_ID=330598719780
ENV FIREBASE_APP_ID=1:330598719780:web:7ae3b0ea7cb4f99f1d53b1


RUN export NODE_OPTIONS=--openssl-legacy-provider && yarn build && yarn install --production --ignore-scripts --prefer-offline
# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /app
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
USER nextjs
EXPOSE 3000
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV=production
CMD ["yarn", "start"]