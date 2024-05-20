<script setup>
const breadcrumbs = [
	{
		title: 'Главная',
		to: '/',
	},
	{
		title: 'Помощь',
		to: '/',
	},
];
</script>

<template>
	<div class="container">
		<BreadCrumbs :list="breadcrumbs" />
		<h2 class="order-column__title">Адрес и время доставки</h2>
		<div class="order-wrapp">
			<div class="order-column">
				<form class="order-form">
					<!--                <input class="order-input order-input-w100" type="text" placeholder="Адрес">-->
					<div class="order-top">
						<div class="order-tabs order-DeliverySwitchTabs">
							<div class="order-tabs__item order-DeliverySwitchTabs__item">
								<div class="order-tabs__item__title">Доставка</div>
							</div>
							<div class="order-tabs__item order-DeliverySwitchTabs__item">
								<div class="order-tabs__item__title">Самовывоз</div>
							</div>
						</div>
						<div class="order-tabs__content order-DeliverySwitch__content">
							<div class="order-top__head">
								<svg
									class="order-top__head__icon"
									xmlns="http://www.w3.org/2000/svg"
									width="45"
									height="34"
									viewBox="0 0 45 34"
									fill="none"
								>
									<path
										d="M41.764 16.4251L35.3845 8.40069C35.0673 8.00147 34.6115 7.77251 34.1337 7.77251H28.2989V7.55333C28.2989 5.7319 26.9738 4.25 25.3454 4.25H5.76643C4.13766 4.25049 2.8125 5.73239 2.8125 7.55382V24.725C2.8125 25.8107 3.60217 26.6937 4.57252 26.6937H9.11105C9.47285 28.4418 10.8737 29.75 12.5453 29.75C14.217 29.75 15.6178 28.4418 15.9796 26.6937H27.0013H28.2994H32.981C33.3428 28.4418 34.7436 29.75 36.4153 29.75C38.0869 29.75 39.4877 28.4418 39.8496 26.6937H40.5141C41.4368 26.6937 42.1875 25.8547 42.1875 24.8224V17.6688C42.1866 17.2104 42.0366 16.7686 41.764 16.4251ZM40.0924 16.5073H32.5338C32.3868 16.5073 32.2674 16.3733 32.2674 16.2089V12.4002C32.2674 12.2358 32.3868 12.1023 32.5338 12.1023H36.5902L40.0924 16.5073ZM5.76643 5.70205H25.3454C26.258 5.70205 27.0009 6.53278 27.0009 7.55382V7.77299V18.6937H4.11053V7.55382C4.11053 6.53278 4.85339 5.70205 5.76643 5.70205ZM12.5449 28.2979C11.3156 28.2979 10.315 27.1795 10.315 25.8043C10.315 24.4291 11.3156 23.3107 12.5449 23.3107C13.7743 23.3107 14.7748 24.4291 14.7748 25.8043C14.7748 27.1795 13.7747 28.2979 12.5449 28.2979ZM16.0326 25.2417C15.7871 23.3327 14.3189 21.8596 12.5449 21.8596C10.7709 21.8596 9.30267 23.3327 9.05724 25.2417H4.57252C4.3179 25.2417 4.11053 25.0098 4.11053 24.7246V20.1448H27.0009V25.2412L16.0326 25.2417ZM36.4148 28.2979C35.185 28.2979 34.1849 27.1795 34.1849 25.8043C34.1849 24.4291 35.185 23.3107 36.4148 23.3107C37.6446 23.3107 38.6447 24.4291 38.6447 25.8043C38.6447 27.1795 37.6442 28.2979 36.4148 28.2979ZM40.5132 25.2417H39.9021C39.6566 23.3327 38.1884 21.8596 36.4144 21.8596C34.6404 21.8596 33.1721 23.3327 32.9267 25.2417H28.2989V9.22407H34.1337C34.2405 9.22407 34.3429 9.27544 34.4142 9.36497L35.4357 10.6502H32.5334C31.6707 10.6502 30.9689 11.4349 30.9689 12.3997V16.2084C30.9689 17.1732 31.6707 17.9584 32.5334 17.9584H40.8882V24.8219C40.8886 25.0538 40.7206 25.2417 40.5132 25.2417Z"
										fill="#F3223C"
									/>
								</svg>
								<div class="order-top__address">
									<div class="order-top__address__bold">
										Иркутск, Байкальская, 256
									</div>
									<span class="order-top__address__red">Изменить адрес</span>
								</div>
							</div>
							<div class="order-inputs">
								<input class="order-input" type="text" placeholder="Квартира" />
								<input class="order-input" type="text" placeholder="Этаж" />
								<input class="order-input" type="text" placeholder="Подъезд" />
								<input class="order-input" type="text" placeholder="Домофон" />
							</div>
							<div class="checkbox-filter order-checkbox">
								<input class="checkbox" type="checkbox" id="home" />
								<label class="checkbox-label" for="home" value="Индилайт"
									>Частный дом</label
								>
							</div>
							<textarea
								class="order-textarea mt0"
								placeholder="Оставьте комментарий к заказу"
							></textarea>
						</div>
						<div class="order-tabs__content order-DeliverySwitch__content">
							<div class="order-top__head ai-c">
								<svg
									class="order-top__head__icon"
									width="45"
									height="34"
									viewBox="0 0 45 34"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M38.9795 13.0098V14.6676C38.9795 15.1487 38.7305 15.579 38.3128 15.8181C37.8945 16.0582 37.3984 16.0548 36.984 15.8121L35.9919 15.2319V28.6963C35.9919 29.7571 35.1286 30.6204 34.0675 30.6204H11.9316C10.8704 30.6204 10.0071 29.7571 10.0071 28.6963V15.2322L9.01504 15.8125C8.80586 15.9346 8.57609 15.9961 8.34566 15.9961C8.11988 15.9961 7.89344 15.937 7.68625 15.8181C7.26855 15.579 7.01953 15.1487 7.01953 14.6676V13.0098C7.01953 12.54 7.27121 12.1013 7.67695 11.8646L21.5001 3.7833C22.4251 3.24607 23.5726 3.24508 24.4977 3.78231L38.3228 11.8649C38.7279 12.1013 38.9795 12.54 38.9795 13.0098ZM34.6319 14.4365L22.9995 7.6332L11.3671 14.4368V28.6963C11.3671 29.0074 11.6202 29.2604 11.9316 29.2604H34.0675C34.3789 29.2604 34.6319 29.0074 34.6319 28.6963V14.4365ZM37.6707 14.6384L37.6202 13.0297L23.8123 4.95736C23.562 4.81193 23.2811 4.73922 23.0002 4.73922C22.7186 4.73922 22.4364 4.81193 22.1854 4.95836L8.36293 13.039L8.37953 14.6676L22.6562 6.25826C22.8687 6.13408 23.1304 6.13408 23.3429 6.25826L37.6707 14.6384ZM22.9995 14.7184C24.5428 13.3495 26.9016 13.3285 28.3665 14.7085C29.1454 15.4416 29.5824 16.4337 29.5983 17.5012C29.6143 18.5693 29.2072 19.5734 28.4521 20.3284L24.2194 24.5621C23.8834 24.8982 23.4411 25.0665 22.9995 25.0665C22.5579 25.0665 22.1163 24.8985 21.7796 24.5625L17.5469 20.3284C16.7919 19.5734 16.3848 18.5693 16.4007 17.5012C16.4167 16.4337 16.8536 15.4416 17.6326 14.7085C19.0988 13.3279 21.4563 13.3501 22.9995 14.7184ZM23.4803 16.1505C23.2147 16.4161 22.7844 16.4161 22.5188 16.1505L22.2173 15.849C21.6787 15.3111 20.9682 15.0385 20.2709 15.0385C19.6473 15.0385 19.0344 15.2566 18.5649 15.6986C18.0563 16.1774 17.7707 16.8248 17.7601 17.5218C17.7501 18.2187 18.0157 18.8741 18.5085 19.3669L22.7412 23.6006C22.8833 23.7427 23.1157 23.743 23.2579 23.6003L27.4906 19.3669C27.9833 18.8741 28.2489 18.2187 28.239 17.5218C28.2284 16.8248 27.9428 16.1774 27.4341 15.6986C26.4394 14.7619 24.8018 14.8303 23.7818 15.8493L23.4803 16.1505Z"
										fill="#F3223C"
									/>
								</svg>

								<div class="order-top__address">
									<div class="order-top__address__bold">
										Иркутск, Трактовая, 20/2
									</div>
								</div>
							</div>
						</div>
					</div>

					<h3 class="order-column__h3">Выберите время и дату доставки</h3>
					<div class="order-tabs order-PageTabs">
						<div class="order-tabs__item order-PageTabs__item">
							<div class="order-tabs__item__title">Сегодня</div>
							<div class="order-tabs__item__day">21 октября</div>
						</div>
						<div class="order-tabs__item order-PageTabs__item">
							<div class="order-tabs__item__title">Сегодня</div>
							<div class="order-tabs__item__day">21 октября</div>
						</div>
					</div>
					<div class="order-tabs__content order-PageTabs__content">
						<div class="order-tabs__radio">
							<input
								class="order-radio"
								type="radio"
								id="contactChoice1"
								name="contact"
								value="с 10 до 13"
							/>
							<label for="contactChoice1">с 10 до 13</label>

							<input
								class="order-radio"
								type="radio"
								id="contactChoice2"
								name="contact"
								value="с 13 до 17"
							/>
							<label for="contactChoice2">с 13 до 17</label>

							<input
								class="order-radio"
								type="radio"
								id="contactChoice3"
								name="contact"
								value="с 17 до  21"
							/>
							<label for="contactChoice3">с 17 до 21</label>

							<input
								class="order-radio"
								type="radio"
								id="contactChoice4"
								name="contact"
								value="с 16 до 21"
							/>
							<label for="contactChoice4">с 16 до 21</label>
						</div>
					</div>
					<div class="order-tabs__content order-PageTabs__content">
						<div class="order-tabs__radio">
							<input
								class="order-radio"
								type="radio"
								id="contactChoice1"
								name="contact"
								value="с 10 до 13"
							/>
							<label for="contactChoice1">с 10 до 13</label>

							<input
								class="order-radio"
								type="radio"
								id="contactChoice2"
								name="contact"
								value="с 13 до 17"
							/>
							<label for="contactChoice2">с 13 до 17</label>

							<input
								class="order-radio"
								type="radio"
								id="contactChoice3"
								name="contact"
								value="с 17 до  21"
							/>
							<label for="contactChoice3">с 17 до 21</label>

							<input
								class="order-radio"
								type="radio"
								id="contactChoice4"
								name="contact"
								value="с 16 до 21"
							/>
							<label for="contactChoice4">с 16 до 21</label>
						</div>
					</div>
					<div class="order-contacts">
						<h2 class="order-column__title">Контактные данные</h2>
						<div class="order-inputs order-inputs-wrap">
							<input
								class="order-input order-input-w50"
								type="text"
								placeholder="Фамилия"
							/>
							<input
								class="order-input order-input-w50"
								type="text"
								placeholder="Имя"
							/>
							<input
								class="order-input order-input-w50"
								type="text"
								id="order-tel"
								placeholder="Телефон"
							/>
							<div class="itc-select order-input-w50" id="order-select">
								<button
									type="button"
									class="itc-select__toggle catalog-header__sort__btn order-select__btn"
									name="order"
									value="tel"
									data-select="toggle"
									data-index="0"
								>
									Перезвонить мне
								</button>
								<div
									class="itc-select__dropdown catalog-header__sort__dropdown order-select__dropdown"
								>
									<ul class="itc-select__options catalog-header__sort__options">
										<li
											class="itc-select__option itc-select__option_selected catalog-header__sort__option"
											data-select="option"
											data-value="tel"
											data-index="0"
										>
											Перезвонить мне
										</li>
										<li
											class="itc-select__option catalog-header__sort__option"
											data-select="option"
											data-value="whatsapp"
											data-index="1"
										>
											Написать в WhatsApp
										</li>
										<li
											class="itc-select__option catalog-header__sort__option"
											data-select="option"
											data-value="sms"
											data-index="2"
										>
											Написать СМС
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="order-comp">
						<h2 class="order-column__title">Контактные данные</h2>
						<div class="order-comp__flex">
							<!-- <img src="/assets/images/product/product-1.jpg" alt="" />
							<img src="/assets/images/product/product-1.jpg" alt="" />
							<img src="/assets/images/product/product-1.jpg" alt="" />
							<img src="/assets/images/product/product-1.jpg" alt="" />
							<img src="/assets/images/product/product-1.jpg" alt="" />
							<img src="/assets/images/product/product-1.jpg" alt="" />
							<img src="/assets/images/product/product-1.jpg" alt="" /> -->
							<div class="order-comp__item-last">+5</div>
						</div>
					</div>
				</form>
			</div>
			<div class="basket-info order-info">
				<h2 class="basket-column__title">Информация о заказе</h2>
				<ul class="basket-info__list">
					<li>
						<div class="basket-info__list__item">4 товара</div>
						<div class="basket-info__list__item">1972 ₽</div>
					</li>
					<li>
						<div class="basket-info__list__item">Скидка 11%</div>
						<div class="basket-info__list__item basket-info__list__item-red">
							–46 ₽
						</div>
					</li>
					<li>
						<div class="basket-info__list__item">Доставка</div>
						<div class="basket-info__list__item">Бесплатно</div>
					</li>
					<li>
						<div class="basket-info__list__item">Общий вес</div>
						<div class="basket-info__list__item">6.756 кг</div>
					</li>
				</ul>
				<div class="basket-info__total">
					<div class="basket-info__total__text">Итого</div>
					<div class="basket-info__total__price">1928 ₽</div>
				</div>
				<div class="promo-input cert">
					<input type="text" placeholder="Сертификат" />
					<button class="promo-input__btn">Применить</button>
				</div>
				<div class="order-payment">
					<h2 class="order-payment__title">Способ оплаты</h2>
					<div class="order-payment__method">
						<label class="order-payment__label" for="method1">
							<!-- <img src="/assets/icons/pay1.svg" alt="" /> -->
							<span>Картой на сайте</span>
						</label>
						<input
							class="order-payment__radio"
							type="radio"
							id="method1"
							value="online"
							name="method"
						/>
					</div>
					<div class="order-payment__method">
						<label class="order-payment__label" for="method2">
							<!-- <img src="/assets/icons/pay2.svg" alt="" /> -->
							<span>Картой при получении</span>
						</label>
						<input
							class="order-payment__radio"
							type="radio"
							id="method2"
							value="karta"
							name="method"
						/>
					</div>
				</div>
				<div class="promo-input__label">У вас 100 бонусов</div>
				<div class="promo-input mt-0">
					<input type="text" placeholder="Бонусы" />
					<button class="promo-input__btn">Применить</button>
				</div>
				<button class="basket-info__btn">Оформить заказ</button>
			</div>
		</div>
	</div>
</template>

<style></style>
