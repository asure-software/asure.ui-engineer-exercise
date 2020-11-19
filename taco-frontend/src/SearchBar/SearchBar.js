import React from 'react';

export function SearchBar() {
    return (
        <div>
            <div class="field has-addons">
                <p class="control">
                    <a class="button is-static"> Search </a>
                </p>
                <p class="control">
                    <input class="input" type="text" placeholder= "tacos, burritos, margaritas"/>
                </p>
                <a class="button is-static"> NEAR </a>

                <p class="control">
                    <input class="input" type="text" placeholder="Burlington"/>
                </p>
            </div>
        </div>
    );
}